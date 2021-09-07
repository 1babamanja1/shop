import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import React from 'react';
import { validate } from './validationForm';

const renderField = ({
  label, type, meta: { touched, error },
}) => (
  <div>
    <Input placeholder={label} type={type} />
    {touched && error && <Error>{error}</Error>}
  </div>
);

const submit = () => { console.log('Hi'); };
// eslint-disable-next-line react/prop-types
const RegisterForm = ({ handleSubmit }) => (
  <StyledForm onSubmit={handleSubmit(submit)}>
    <Field name="username" type="text" label="Name" component={renderField} />
    <Field name="email" type="email" label="Email" component={renderField} />
    <Field
      name="password"
      type="password"
      label="Password"
      component={renderField}
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      component={renderField}
    />
    <Button type="submit">Register</Button>
  </StyledForm>
);

export default reduxForm({ form: 'registerForm', validate })(RegisterForm);

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

const Input = styled.input`
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

`;

const Button = styled.button`
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
const Error = styled.div`
  font-size: 12px;
  color: darkred;
`;
