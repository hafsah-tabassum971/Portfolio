import React from "react";
import styled, { keyframes } from "styled-components";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img7 from "../assets/7.jpg";

// Fade-in and move-up animation
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Container (single section background)
const ServicesContainer = styled.section`
  padding: 3rem 2rem;
  margin: 0 auto;
  background: linear-gradient(to bottom, #59625c 0%, #555e56 100%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

// Section heading
const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 4rem;
  color: white;
  position: relative;
  display: inline-block;
  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  /* &::after {
    content: "";
    display: block;
    width: 80px;
    height: 5px;
    background-color: #610D0D;
    border-radius: 3px;
    margin: 15px auto 0;
  } */
`;

const Highlight = styled.span`
  color: white;
`;

// Service row
const ServiceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  padding: 30px 20px;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 0;
  }
`;

// Card behind the image
const ServiceImageCard = styled.div`
  background: #f6efe2;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  display: inline-block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Tilted image inside the card
const ServiceImage = styled.img`
  width: 460px;
  max-width: 100%;
  border-radius: 15px;
  transform: rotate(-4deg); /* tilt effect */
  transition: transform 0.4s ease;

  ${ServiceImageCard}:hover & {
    transform: rotate(0deg) scale(1.05); /* straighten + zoom on hover */
  }
  @media (max-width: 768px) {
    width: 320px;
  }

  @media (max-width: 480px) {
    width: 100%;
    transform: rotate(0deg);
  }
`;

// Text
const ServiceContent = styled.div`
  flex: 1;
  padding: 20px;
  animation: ${fadeInUp} 1s ease;
  text-align: left;

  h2 {
    font-size: 2.2rem;
    color: #610d0d;
    margin-bottom: 20px;
    position: relative;
    font-weight: 700;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 4px;
      background-color: #610d0d;
      border-radius: 3px;
      margin-top: 12px;
    }
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      text-align: left;
    }
  }

  p {
    font-size: 1.1rem;
    color: #ddd;
    line-height: 1.8;
    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
            text-align: left;
            margin-bottom: 2px;

    }
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem 0;
  }
`;

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
"Get a modern, responsive website that’s fast, user-friendly, and built to grow with your business. From smooth navigation to clean design, everything is crafted to give your customers the best experience. Your site will be optimized for performance, accessibility, and long-term scalability. Plus, you’ll have a strong online presence that makes your brand stand out.",      image: img4,
      reverse: false,
    },
    {
      title: "Landing Pages",
      description:
        "Boost conversions with landing pages that capture attention instantly. Designed with engaging visuals and clear call-to-actions, they guide visitors toward taking action effortlessly. Every page is lightweight, mobile-ready, and tailored to your brand’s goals. With the right balance of design and strategy, your campaigns will deliver measurable results.",
      image: img5,
      reverse: true,
    },
    {
      title: "API Integration & Hosting",
      description:
        "Keep your apps running seamlessly with secure API integrations and reliable hosting. From payments to cloud services, everything is set up for smooth performance and scalability. You get worry-free uptime with flexible hosting on platforms like Firebase, Vercel, or Netlify. This ensures your business stays online, secure, and ready to grow without limits.",
      image: img7,
      reverse: false,
    },
  ];

  return (
    <ServicesContainer id="services">
      <Heading>
        My <Highlight>Services</Highlight>
      </Heading>
      {services.map((service, index) => (
        <ServiceRow key={index} reverse={service.reverse}>
          <ServiceContent>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </ServiceContent>
          <ServiceImageCard>
            <ServiceImage src={service.image} alt={service.title} />
          </ServiceImageCard>
        </ServiceRow>
      ))}
    </ServicesContainer>
  );
};

export default Services;
