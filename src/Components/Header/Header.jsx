import React from 'react';
import styled from 'styled-components';

const Header = (themeToggle, { children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
    & *{
    color: ${(props) => props.theme.color};
    text-decoration: none;
  }
`;
