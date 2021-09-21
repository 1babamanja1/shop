import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from '../../Theme/theme';

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
  height: fit-content;
  margin-top: 50px;
  
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  color: ${Colors('light-text')};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.color};
  
`;
