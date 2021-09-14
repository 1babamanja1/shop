import styled from 'styled-components';
import React from 'react';

const Input = ({
  name, type = 'text', placeholder, onChangeHandler, error,
}) => (
  <div>
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
    {{ error } && <Error>{error}</Error>}
  </div>
);

export default Input;

const StyledInput = styled.input`
  width: 250px;
  height: 50px;
  margin: 5px;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 10px;
  box-shadow: 2px 2px ${(props) => props.theme.color};
  outline: none;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};

  &::placeholder {
    color: ${(props) => props.theme.color}
  }
`;

const Error = styled.div`
  font-size: 12px;
  color: darkred;
`;
