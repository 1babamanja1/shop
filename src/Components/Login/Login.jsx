import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import { login } from '../../services/api/user';
import { ACTIONS } from '../../redux/constants';

const Login = () => {
  const [logData, setLogData] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    setLogData({ ...logData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(logData);
      history.push('/login');
      if (response.token) {
        // создавать экшены, так не использвоать
        dispatch({ type: ACTIONS.SET_AUTHORIZED });
        history.push('/home');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <nav><Link to="/login">Login</Link></nav>
      <nav><Link to="/registration">Register</Link></nav>
      <Form handleSubmit={handleSubmit}>
        <Input name="username" placeholder="name" onChangeHandler={onChangeHandler} />
        <Input name="password" placeholder="password" type="password" onChangeHandler={onChangeHandler} />
        <Button type="submit" buttonName="Login" />
      </Form>
    </div>
  );
};
export default Login;
