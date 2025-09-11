import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <>

    <Navbar scrolled={scrolled}>
      <Logo href="#home">Hafsah Tabassum</Logo>

      {/* Desktop Menu */}
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        {/* <NavLink href="#about">About</NavLink> */}
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>

      {/* Mobile Menu Button */}
      <MenuBtn onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MenuBtn>

      {/* Mobile Dropdown */}
     <MobileMenu isOpen={isOpen}>
  <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
  <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
  <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
  <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
</MobileMenu>


    </Navbar>
        {/* Spacer to push content down */}
    <MobileMenuSpacer isOpen={isOpen} />
      </>

  );
};

export default Nav;

/* ----------------- Styled Components ----------------- */

const Navbar = styled.nav`
  position: relative; /* navbar scrolls with page */
  /* width: 100%; */
  background: #F6EFE2;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0px 2px 10px rgba(0,0,0,0.1)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  z-index: 1000;
`;


const Logo = styled.a`
  font-size: 1.9rem;
  font-weight: bold;
  color: #610D0D;
  text-decoration: none;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 1.7rem; /* smaller tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* small phones */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #610D0D;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #520e0e; /* lighter earthy green on hover */
  }

  /* underline animation */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: #610D0D;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #610D0D;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%; /* below navbar */
  left: 0;
  width: -webkit-fill-available; /* full width */
  background: #F6EFE2;
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  justify-content: center; /* center vertically if enough height */
  padding: 2rem 1rem;
  gap: 1.5rem;
  box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
  border-radius: 0 0 12px 12px;
  transition: all 0.4s ease-in-out;

  /* animation */
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-20px)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.4rem; /* bigger text for mobile */
  text-align: center;
  width: 100%;
  padding: 0.5rem 0;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #520e0e;
  }
`;
const MobileMenuSpacer = styled.div`
  height: ${({ isOpen }) => (isOpen ? "200px" : "0")}; /* adjust height to match menu */
  transition: height 0.4s ease-in-out;
`;



