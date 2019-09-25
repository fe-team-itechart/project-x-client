import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { isTokenValid } from '../../utils/validToken';

export const PrivateRoute = ({ component: Component, pathName, ...rest }) => {
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
              pathName,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  pathName: '/',
};

PrivateRoute.propTypes = {
  pathName: PropTypes.string,
};
