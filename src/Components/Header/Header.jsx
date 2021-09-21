import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DarkModeToggle from 'react-dark-mode-toggle';
import changeTheme from '../../redux/theme/actions';
import { getAuthorized } from '../../redux/user/selectors';
import { setUnauthorized } from '../../redux/user/actions';
import getCurrentTheme from '../../redux/theme/selectors';
import { Colors } from '../../Theme/theme';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuthorized);
  const mode = useSelector(getCurrentTheme);
  const body = isAuth ? <MainNav /> : <LoginNav />;

  return (
    <StyledHeader>
      <Link to="/home"><h2>PokeDelivery</h2></Link>
      {body}
      <DarkModeToggle onChange={() => dispatch(changeTheme())} checked={mode === 'dark'} size={60} />
    </StyledHeader>
  );
};

export default Header;

const MainNav = () => {
  const dispatch = useDispatch();
  return (
    <StyledNav props="space-between">
      <Link to="/home">Home</Link>
      <Link to="/login" onClick={() => dispatch(setUnauthorized())}>Logout</Link>
    </StyledNav>
  );
};

const LoginNav = () => (
  <StyledNav props="flex-end">
    <Link to="/registration">Register</Link>
    <Link to="/login">Login</Link>
  </StyledNav>
);

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 10px;
  background-color: ${Colors('orange')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & * {
    color: ${Colors('light-text')};;
    text-decoration: none;
   
  }
`;
const StyledNav = styled.div`
  width: 70%;
  display: flex;
  justify-content: ${(props) => props.props};
  & *{
    margin: 0 15px;
  }
`;
