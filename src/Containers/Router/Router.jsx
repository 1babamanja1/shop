import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../../Components/Header';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import BigSaleCard from '../../Components/BigSaleCard';
import ProtectedRoute from './ProtectedRoute';
import Cart from '../Cart';

import getAuthorized from '../../redux/user/selectors';
import { getPokeList } from '../../redux/pokemons/actions';
import { getLoadingStatus } from '../../redux/pokemons/selectors';

export default function ShopRouter() {
  const isAuthorized = useSelector(getAuthorized);
  const isLoading = useSelector(getLoadingStatus);

  const dispatch = useDispatch();
  useEffect(() => { if (isAuthorized) dispatch(getPokeList()); }, [dispatch, isAuthorized]);

  const LoadedPage = () => (
    <Container>
      <Route exact path="/"><Redirect to="/home" /></Route>
      <ProtectedRoute
        exact
        path="/home"
        component={Homepage}
        isAuth={isAuthorized}
      />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/pokemons/:pokeName" component={BigSaleCard} isAuth={isAuthorized} />
      <ProtectedRoute exact path="/cart" component={Cart} isAuth={isAuthorized} />
    </Container>
  );

  const Preloader = () => <div>Preloader</div>;

  const body = (!isLoading) ? <LoadedPage /> : <Preloader />;

  return (
    <Router>
      <Header />
      <Body>
        {body}
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
