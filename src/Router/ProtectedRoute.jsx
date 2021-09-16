import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => ((isAuth) ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}
