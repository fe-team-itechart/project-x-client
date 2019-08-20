import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../containers/mainPage';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
};
