import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../layout';
import { GettingStarted } from '../help/gettingStarted';
import { Profile } from '../../containers/profile';
import { Trobleshooting } from '../help/troubleshooting';
import { CourseTaking } from '../help/courseTaking'

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/getting_started" component={GettingStarted} />
      <Route path="/profile" component={Profile} />
      <Route path="/troubleshooting" component={Trobleshooting} />
      <Route path="/course_taking" component={CourseTaking} />
    </Switch>
  );
};
