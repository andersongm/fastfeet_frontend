import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { Container } from './styles';
import AuthLayout from '../_layouts/auth';
import DefaultLayout from '../_layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const { signed } = store.getState().auth;

  const Layout = signed ? DefaultLayout : AuthLayout;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/deliveries" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props}  />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
