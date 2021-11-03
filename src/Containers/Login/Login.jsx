import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Form from '../../Components/Form';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { login } from '../../services/api/user';
import { setAuthorized } from '../../redux/user/actions';

const textErrors = {
  401: 'User with this username is not registered',
  409: 'Username and/or password is not correct',
  default: 'Something went wrong, please try again later',
};

const Login = () => {
  const [logData, setLogData] = useState({});
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();

  const onChangeHandler = (event) => {
    setLogData({ ...logData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await login(logData);

    if (response?.status === 200) {
      dispatch(setAuthorized());
      history.push('/home');
    } else setErrors({ regError: textErrors[response?.status] || textErrors.default });
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit}>
        <Header>Login</Header>
        <Pic />
        <Input name="username" placeholder="Name" onChangeHandler={onChangeHandler} />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChangeHandler={onChangeHandler}
          error={errors.regError}
        />
        <Button type="submit" buttonName="Login" />
      </Form>
    </div>
  );
};
export default Login;

const Pic = styled.div`
  width: 200px;
  height: 160px;
  background-image: url('/imgs/welcome_snorlax.png');
  background-position: center;
  background-size: cover;
`;

const Header = styled.h2`
  color: ${(props) => props.theme.color};
`;
