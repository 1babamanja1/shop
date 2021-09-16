import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Homepage from '../Pages/Homepage/Homepage';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import ProtectedRoute from './ProtectedRoute';
import { getAuthorized } from '../redux/user/user-actions';

export default function ShopRouter() {
  const isAuthorized = useSelector(getAuthorized);

  return (
    <Router>
      <Route exact path="/"><Redirect to="/login" /></Route>
      <ProtectedRoute
        exact
        path="/home"
        component={Homepage}
        isAuth={isAuthorized}
      />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}
