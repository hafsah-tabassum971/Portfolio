import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const FooterContainer = styled.footer`
  background: #f6efe2;
  color: #610d0d;
  padding: 80px 20px 30px;
  font-family: "Poppins", sans-serif;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr; /* 2 cols on tablet/mobile */
    gap: 30px;
    text-align: left; /* keep left aligned */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* single col on very small screens */
    gap: 25px;
  }
`;

const Brand = styled.div`
  max-width: 300px;

  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #814141;
  }
`;
const Column = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
    color: #610d0d;
    position: relative;

    &::after {
      content: "";
      width: 40px;
      height: 3px;
      background: #610d0d;
      position: absolute;
      bottom: -6px;
      left: 0;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

 li a {
  font-size: 0.95rem;
  color: #610d0d;
  text-decoration: none;
  position: relative;   /* ✅ important for underline */
  transition: color 0.3s ease;

  &:hover {
    color: #520e0e;
  }

  /* underline animation */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0%;
    height: 2px;
    background: #610d0d;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
}

`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    color: #610d0d;
    text-decoration: none;

    svg {
      font-size: 18px;
      background: #610d0d;
      color: #fff;
      border-radius: 50%;
      padding: 6px;
    }

    &:hover {
      color: #520e0e;
    }

    /* underline only for text span */
    span {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 2px;
        background: #610d0d;
        transition: width 0.3s ease-in-out;
      }
    }

    &:hover span::after {
      width: 100%;
    }
  }
`;


const ContactInfo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.95rem;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    color: #610d0d;
    text-decoration: none;

    &:hover {
      color: #520e0e;
    }
  }
`;


const Divider = styled.div`
  border-top: 1px solid rgba(97, 13, 13, 0.2);
  margin: 50px auto 20px;
  max-width: 1200px;

  @media (max-width: 480px) {
    margin: 40px auto 15px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #814141;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        {/* Brand */}
        <Brand>
          <h2>Hafsah Tabassum</h2>
          <p>Building Modern Web Experiences That Grow Your Brand.</p>
        </Brand>

        {/* Quick Links + Social Media on small devices only */}
        <Column>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ minWidth: '120px' }}>
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div style={{ minWidth: '120px' }}>
              <h3>Follow Me</h3>
<Socials>
  <a href="https://github.com/hafsah-tabassum971" target="_blank" rel="noreferrer">
    <FaGithub /> <span>GitHub</span>
  </a>
  <a href="https://www.linkedin.com/in/hafsah-tabassum-13a6a5238" target="_blank" rel="noreferrer">
    <FaLinkedin /> <span>LinkedIn</span>
  </a>
</Socials>

            </div>
          </div>
        </Column>

        {/* Contact Info */}
        <Column>
          <h3>Contact</h3>
          <ContactInfo>
            <li><FiMapPin /> Lahore, Pakistan</li>
            <li><FiMail /> <a href="mailto:hafsahtabassum01@gmail.com">hafsahtabassum01@gmail.com</a></li>
            <li><FiPhone /> +92 324 8559340</li>
          </ContactInfo>
        </Column>
      </FooterGrid>

      <Divider />
      <Copyright>
        © {new Date().getFullYear()} Hafsah Tabassum. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
