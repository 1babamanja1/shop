import styled from 'styled-components';
import React, { useState } from 'react';
import validate from './validationRules';
import { register } from '../../services/api/user';

const RegisterForm = () => {
  const [regData, setRegData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate(regData);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await register(regData);
        // добавь ообработку успешной регистрации
        setErrors({});
        console.log('tada', response);
      } catch (e) {
        console.error(e);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* Создай Инпут как отдельный компонент с ошибками и тд */}
      <Input
        name="username"
        type="text"
        placeholder="Name"
        // создай handler для етого
        onChange={(e) => { setRegData({ ...regData, username: e.target.value }); }}
      />
      {errors.username && <Error>{errors.username}</Error>}
      <Input
        name="email"
        type="email"
        placeholder="Email"
        onChange={(e) => { setRegData({ ...regData, email: e.target.value }); }}
      />
      {errors.email && <Error>{errors.email}</Error>}
      <Input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => { setRegData({ ...regData, password: e.target.value }); }}
      />
      {errors.password && <Error>{errors.password}</Error>}
      <Input
        name="password2"
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => { setRegData({ ...regData, password2: e.target.value }); }}
      />
      {errors.password2 && <Error>{errors.password2}</Error>}
      {/* Тоже самое с кнопкой */}
      <Button type="submit">Register</Button>
    </StyledForm>
  );
};

export default RegisterForm;

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
  }
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
