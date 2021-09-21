import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../../Components/Header';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import BigSaleCard from '../../Components/BigSaleCard';
import ProtectedRoute from './ProtectedRoute';

import { getAuthorized } from '../../redux/user/selectors';

export default function ShopRouter() {
  const isAuthorized = useSelector(getAuthorized);

  return (
    <Router>
      <Header />
      <Body>
        <Container>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <ProtectedRoute
            exact
            path="/home"
            component={Homepage}
            isAuth={isAuthorized}
          />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route path="/pokemons/:pokeName" component={BigSaleCard} />
        </Container>
      </Body>
    </Router>
  );
}

const Body = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  @media (max-width: 901px) {
    width: 90%;
    min-width: 500px;
`;
