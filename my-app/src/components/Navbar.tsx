import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_white_6p2ZETYLi.svg" alt="Logo" />
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <NavItem>Home</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Blogs</NavItem>
        <NavItem>About</NavItem>
        <Button>Book Now</Button>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #25262b;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-left:7rem;
`;

const NavMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: #25262b;
    transition: left 0.3s ease-in-out;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #0ef;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Button = styled.button`
  background-color: #58CAD0;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right:10rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #58CAD0;
    color: #25262b;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
