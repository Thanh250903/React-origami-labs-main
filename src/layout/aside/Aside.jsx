import React from 'react';
import styled from 'styled-components';

const AsideContainer = styled.aside`
  background-color: #003366;
  color: white;
  padding: 10px;
  height: 100%;
`;

const AsideLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const AsideLink = styled.li`
  margin: 20px 0;
`;

const AsideAnchor = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Aside() {
  return (
    <AsideContainer>
      <AsideLinks>
        <AsideLink><AsideAnchor href="/">Post</AsideAnchor></AsideLink>
        <AsideLink><AsideAnchor href="/">Register</AsideAnchor></AsideLink>
        <AsideLink><AsideAnchor href="/">Login</AsideAnchor></AsideLink>
        <AsideLink><AsideAnchor href="/">Profile</AsideAnchor></AsideLink>
      </AsideLinks>
    </AsideContainer>
  );
}

export default Aside;
