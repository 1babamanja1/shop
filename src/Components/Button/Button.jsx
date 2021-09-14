import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ onClick, buttonName, type }) => (
  <StyledButton type={type} onClick={onClick}>{buttonName}</StyledButton>);

Button.defaultProps = {
  buttonName: '',
  type: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string,
  type: PropTypes.string,
};

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
