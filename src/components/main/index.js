import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../layout';
import { GettingStarted } from '../help/gettingStarted';
import { Profile } from '../../containers/profile';
import { Trobleshooting } from '../help/troubleshooting';
import { CourseTaking } from '../help/courseTaking'
import ChangePassword from '../changePassword';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/profile" component={Profile} />
      <Route path="/troubleshooting" component={Trobleshooting} />
      <Route path="/course-taking" component={CourseTaking} />
      <Route path="/change-password"  component={ChangePassword}/>
    </Switch>
  );
};
