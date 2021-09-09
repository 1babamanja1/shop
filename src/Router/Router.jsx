import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Homepage from '../Components/Homepage/Homepage';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';

export default function ShopRouter() {
  return (

    <Router>
      <NavBar>
        <nav><Link to="/">Home</Link></nav>
        <nav><Link to="/login">Login</Link></nav>
        <nav><Link to="/registration">Register</Link></nav>
      </NavBar>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

const NavBar = styled.div`
display: flex;
  & *{
    text-decoration: none;
    margin: 5px;
  }
`;
