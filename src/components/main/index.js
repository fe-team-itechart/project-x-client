import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../layout';
import { GettingStarted } from '../help/gettingStarted';
import { Profile } from '../../containers/profile';
import { Trobleshooting } from '../help/troubleshooting';
import { CourseTaking } from '../help/courseTaking';
import Sources from '../../containers/sources';
import Categories from '../../containers/categories';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/sources" component={Sources} />
      <Route path="/categories" component={Categories} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/profile" component={Profile} />
      <Route path="/troubleshooting" component={Trobleshooting} />
      <Route path="/course-taking" component={CourseTaking} />
    </Switch>
  );
};
