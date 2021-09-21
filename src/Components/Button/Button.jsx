import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colors } from '../../Theme/theme';

const Button = ({ onClick, buttonName, type }) => (
  <StyledButton type={type} onClick={onClick}><h4>{buttonName}</h4></StyledButton>);

export default Button;

Button.defaultProps = {
  buttonName: '',
  type: '',
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  buttonName: PropTypes.string,
  type: PropTypes.string,
};

const StyledButton = styled.button`
  min-width: 100px;
  padding: 10px;
  background-color: ${Colors('orange')};
  color: ${Colors('light-text')};
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 15px 30px -10px inset ${(props) => props.theme.color};
    transition: 0.5s;
  }
`;
