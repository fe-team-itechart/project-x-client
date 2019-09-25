import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { isTokenValid } from '../../utils/validToken';

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  pathname,
  ...rest
}) => {
  const valid = isTokenValid();
  return (
    <Route
      {...rest}
      render={props =>
        valid ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  pathname: '/',
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  pathname: PropTypes.string,
};
