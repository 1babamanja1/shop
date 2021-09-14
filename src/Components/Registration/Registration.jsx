import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import validate from '../Form/validationRules';
import { register } from '../../services/api/user';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

const Registration = () => {
  const history = useHistory();

  const [errors, setErrors] = useState({});
  const [regData, setRegData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate(regData);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await register(regData);
        setErrors({});
        if (response.success) { history.push('/login'); }
      } catch (e) {
        console.error(e);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setRegData({ ...regData, [name]: value });
  };

  return (
    <div>
      {/* сделать компонент хидера */}
      <nav><Link to="/login">Login</Link></nav>
      <nav><Link to="/registration">Register</Link></nav>

      <Form handleSubmit={handleSubmit}>
        <Input name="username" placeholder="Name" error={errors.username} onChangeHandler={onChangeHandler} />
        <Input name="email" placeholder="Email" type="email" error={errors.email} onChangeHandler={onChangeHandler} />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          error={errors.password}
          onChangeHandler={onChangeHandler}
        />
        <Input
          name="password2"
          placeholder="Confirm Password"
          type="password"
          error={errors.password2}
          onChangeHandler={onChangeHandler}
        />
        <Button type="submit" buttonName="Register" />
      </Form>
    </div>
  );
};
export default Registration;
