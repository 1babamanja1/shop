import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../../Components/Header';
import Homepage from '../Homepage/Homepage';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import BigSaleCard from '../BigSaleCard';
import ProtectedRoute from './ProtectedRoute';
import Cart from '../Cart';
import AdminPanel from '../AdminPanel';

import { getAuthorized, getRole } from '../../redux/user/selectors';
import { getPokeList } from '../../redux/pokemons/actions';
import { getLoadingStatus } from '../../redux/common/selectors';
import Preloader from '../../Components/Preloader';
import httpCore from '../../services/httpCore';
import AddPokemonForm from '../AdminPanel/AddPokemonForm';

const ShopRouter = () => {
  const isAuthorized = useSelector(getAuthorized);
  const isLoading = useSelector(getLoadingStatus);
  const role = useSelector(getRole);

  httpCore.setAuthorizationToken(isAuthorized);

  const dispatch = useDispatch();
  useEffect(
    () => {
      if (isAuthorized) {
        dispatch(getPokeList());
      }
    },
    [dispatch, isAuthorized],
  );

  return (
    <Router>
      <Header />
      <Body>
        {isLoading && !!isAuthorized ? (
          <Preloader />
        ) : (
          <Container>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <ProtectedRoute exact path="/home" component={Homepage} isAuth={!!isAuthorized} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute
              exact
              path="/pokemons:id"
              component={BigSaleCard}
              isAuth={!!isAuthorized}
            />
            <ProtectedRoute exact path="/cart" component={Cart} isAuth={!!isAuthorized} />
            <ProtectedRoute exact path="/admin" component={AdminPanel} isAuth={role === 'admin'} />
            <ProtectedRoute exact path="/add_pokemon" component={AddPokemonForm} isAuth={role === 'admin'} />
          </Container>
        )}
      </Body>
    </Router>
  );
};

export default ShopRouter;

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
