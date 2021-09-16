import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { login } from '../../services/api/user';
import Header from '../../Components/Header';
import { getAuthorized, setAuthorized } from '../../redux/user/user-actions';
import { state } from '../../redux';

const Login = () => {
  const [logData, setLogData] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const onChangeHandler = (event) => {
    setLogData({ ...logData, [event.target.name]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await login(logData);
      if (response.token) {
        dispatch(setAuthorized());
        history.push('/home');
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Header>
        <nav><Link to="/registration">Register</Link></nav>
      </Header>
      <Form handleSubmit={handleSubmit}>
        <Input name="username" placeholder="name" onChangeHandler={onChangeHandler} />
        <Input name="password" placeholder="password" type="password" onChangeHandler={onChangeHandler} />
        <Button type="submit" buttonName="Login" />
      </Form>
    </div>
  );
};
export default Login;
