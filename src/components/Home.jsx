import React from "react";
import styled, { keyframes } from "styled-components";
import { FaReact, FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  return (
    <Hero id="home">
      <Overlay />

      {/* Centered Content */}
      <HeroContent>
        <Intro>
          Hafsah, <span>Here!</span>
        </Intro>
        <Title>
          Connect <Highlight>User-Centric </Highlight>Designs For Your
          <Highlight> Website</Highlight>
        </Title>
        {/* <Title>
    Helping <Highlight>Brands</Highlight> & <Highlight>Businesses</Highlight> <br />
    Shine on the <Highlight>Web</Highlight>
  </Title> */}
        <Intro2>
          Coding + Develop With Me = One-Stop Solution for your Website
          {/* <span> One-Stop Solution for your Website </span> */}
        </Intro2>
        <Subtitle>
          I brainstorm, plan, and
          transform your complex business ideas into engaging websites to guide
          your audience through each step and bring you the growth you deserve.
          {/* Your website should do more than exist - it should inspire trust, capture
  attention, and turn visitors into loyal clients.<Highlight> My goal?</Highlight> Turning your
  visitors into customers who connect with your brand and keep coming back.
  <Highlight> How? </Highlight>I brainstrorm, plan and transform your complex business ideas and bring you the growth you deserve. */}
          {/* <p> How? I brainstrorm, plan and transform your complex business ideas and bring you the growth you deserve.</p> */}
        </Subtitle>

        <Buttons>
          <SecondaryBtn href="#projects">View Portfolio</SecondaryBtn>
          <PrimaryBtn href="#contact">Ready To Launch a Project</PrimaryBtn>
        </Buttons>
      </HeroContent>

      {/* Floating/Rotated Icons */}
      <FloatingIcon style={{ left: "6%" }} top="70%" mobileTop="83%">
        <FaReact size={45} />
      </FloatingIcon>

      <FloatingIcon style={{ top: "15%", right: "5%" }}>
        <FaLaptopCode size={50} />
      </FloatingIcon>
    </Hero>
  );
};

export default Home;

/* ---------------- Styled Components ---------------- */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const Hero = styled.section`
  min-height: 100vh;
  background: #555e56;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3.5rem 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 0.5rem 1rem; /* reduced top spacing */
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;

`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 950px;
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: 480px) {
    /* max-width: 90%; */
  }
`;

const Intro = styled.p`
  background: rgba(255, 255, 255, 0.15);
  display: inline-block;
  padding: 0.7rem 1.4rem;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-bottom: 2rem;
    margin-top: 2rem;

  letter-spacing: 0.5px;

  span {
    font-weight: bold;
    color: #610d0d;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }
`;

const Intro2 = styled.p`
  background: rgba(255, 255, 255, 0.15);
  display: inline-block;
  padding: 0.7rem 1.4rem;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  letter-spacing: 0.5px;

  span {
    font-weight: bold;
    color: #610d0d;
  }
  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem; /* More bold impact */
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.7rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const Highlight = styled.span`
  color: #610d0d;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  text-align: center; /* cleaner than justify */

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const SecondaryBtn = styled.a`
  border: 2px solid #f6efe2;
  padding: 1rem 2.3rem;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  background-color: #f6efe2;
  color: #610d0d;
  font-size: 1.15rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #610d0d;
    color: white;
    border: 2px solid #610d0d;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.9rem;
  border-radius: 50%;
  color: white;
  backdrop-filter: blur(6px);
  transform: rotate(-50deg);
  animation: ${float} 6s ease-in-out infinite;

  top: ${({ top }) => top || "0"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};

  @media (max-width: 768px) {
    top: ${({ mobileTop }) =>
      mobileTop || top || "0"}; /* use mobileTop if provided */
    transform: rotate(-45deg);
    padding: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    svg {
      width: 35px;
      height: 35px;
    }
  }
    @media (max-width: 480px) {
    display: none; /* hide on very small screens */
  }
`;

const PrimaryBtn = styled.a`
  background: #610d0d;
  color: white;
  padding: 1rem 2.3rem;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.15rem;
  transition: all 0.3s ease;

  &:hover {
    background: #f6efe2;
    color: #610d0d;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }
`;
