import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

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

Input.defaultProps = {
  name: '',
  type: '',
  placeholder: '',
  error: '',
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;

const StyledInput = styled.input`
  width: 250px;
  height: 50px;
  margin: 5px;
  padding-left: 5px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${(props) => props.theme.color};
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
