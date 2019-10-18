import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../layout';
import { GettingStarted } from '../help/gettingStarted';
import { ProfileRouters } from '../../containers/profile';
import { Trobleshooting } from '../help/troubleshooting';
import { CourseTaking } from '../help/courseTaking';
import ResetPassword from '../../containers/auth/resetPassword';
import { Catalogue } from '../../containers/catalogue';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/troubleshooting" component={Trobleshooting} />
      <Route path="/course-taking" component={CourseTaking} />
      <Route path="/reset" component={ResetPassword} />
      <ProfileRouters />
    </Switch>
  );
};
