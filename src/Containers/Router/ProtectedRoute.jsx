import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFromCookie } from '../../services/localStorage';

export default function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}
ProtectedRoute.defaultProps = {
  isAuth: !!getFromCookie('auth'),
  component: () => {},
};

ProtectedRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.func,
};
