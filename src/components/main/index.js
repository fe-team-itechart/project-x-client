import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
};
