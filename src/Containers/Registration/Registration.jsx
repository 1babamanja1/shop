import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import validate from '../../Components/Form/validationRules';
import { register } from '../../services/api/user';
import Form from '../../Components/Form';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

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
      <Form handleSubmit={handleSubmit}>
        <Pic />
        <Header>Registration</Header>
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

const Pic = styled.div`
  width: 110px;
  height: 80px;
  background-image: url('imgs/register_abra.png');
  background-position: center;
  background-size: cover;
  `;

const Header = styled.h2`
  color: ${(props) => props.theme.color}
`;
