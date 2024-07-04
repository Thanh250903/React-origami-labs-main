import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ff9900;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`;

const FooterLink = styled.li`
  display: inline;
`;

const FooterAnchor = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink><FooterAnchor href="/">Post</FooterAnchor></FooterLink>
        <FooterLink><FooterAnchor href="/">Register</FooterAnchor></FooterLink>
        <FooterLink><FooterAnchor href="/">Login</FooterAnchor></FooterLink>
        <FooterLink><FooterAnchor href="/">Profile</FooterAnchor></FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
