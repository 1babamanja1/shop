import styled from 'styled-components';
import React from 'react';

const Button = ({ clickHandler, buttonName, type }) => (
  <StyledButton type={type} onClick={clickHandler}>{buttonName}</StyledButton>);

export default Button;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.color};
  border-radius: 10px;

  &:hover {
    background-color: darkgrey;
    transition: 0.5s;
  }
`;
