import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import getAuthorized from '../../redux/user/selectors';
import { getCurrentTheme } from '../../redux/common/selectors';
import { getCartCounter } from '../../redux/cart/selectors';
import { changeTheme } from '../../redux/common/actions';
import { setUnauthorized } from '../../redux/user/actions';

import { colors } from '../../Theme/theme';

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector(getCurrentTheme);
  const isAuth = useSelector(getAuthorized);
  const cartCounter = useSelector(getCartCounter);

  const logOut = () => dispatch(setUnauthorized());
  const toggleTheme = () => dispatch(changeTheme());

  return (
    <StyledHeader>
      <Link to="/home"><h2>PokeDelivery</h2></Link>
      {isAuth
        ? (
          <StyledNav props="flex-end">
            <Link to="/home">Home</Link>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCounter}
            </Link>
            <Link to="/login" onClick={logOut}>Logout</Link>

          </StyledNav>
        )
        : (
          <StyledNav props="flex-end">
            <Link to="/registration">Register</Link>
            <Link to="/login">Login</Link>
          </StyledNav>
        )}
      <DarkModeToggle onChange={toggleTheme} checked={mode === 'dark'} size={60} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 10px;
  background-color: ${colors.orange};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & * {
    color: ${colors.lightText};;
    text-decoration: none;
   
  }
`;
const StyledNav = styled.div`
  width: 70%;
  display: flex;
  justify-content: ${(props) => props.props};
  & > *{
    margin: 0 15px;
  }
  & *{
    margin-right: 5px;
  }
`;
