import React from 'react';
import styled from 'styled-components';
import birdLogo from '../body/bird_logo.png';

const Nav = styled.nav`
  background-color: #003366;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 50px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  display: inline;
`;

const NavAnchor = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo src={birdLogo} alt="Logo" />
      <NavLinks>
        <NavLink><NavAnchor href="/">Post</NavAnchor></NavLink>
        <NavLink><NavAnchor href="/">Register</NavAnchor></NavLink>
        <NavLink><NavAnchor href="/">Login</NavAnchor></NavLink>
        <NavLink><NavAnchor href="/">Profile</NavAnchor></NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
