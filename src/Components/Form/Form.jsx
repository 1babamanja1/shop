import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, children }) => <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const StyledForm = styled.form`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 10px;
  box-shadow: 2px 2px ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;
