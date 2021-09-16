import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import React from 'react';
import Homepage from '../Pages/Homepage/Homepage';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import ProtectedRoute from './ProtectedRoute';
import { state } from '../redux/store';
import { getAuthorized } from '../redux/user/user-actions';

export default function ShopRouter() {
  return (
    <Router>
      <Route exact path="/"><Redirect to="/login" /></Route>
      <ProtectedRoute
        exact
        path="/home"
        component={Homepage}
        isAuth="getAuthorized(state)"
      />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}
