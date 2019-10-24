import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../layout';
import { ProfileRouters } from '../../containers/profile';
import ResetPassword from '../../containers/auth/resetPassword';
import { Catalogue } from '../../containers/catalogue';
import CoursePageDetails from '../../containers/coursePageDetails';
import { Terms } from '../terms';
import { Privacy } from '../privacy';

export const Main = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/course/preview/:id" component={CoursePageDetails} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <ProfileRouters />
    </Switch>
    </>
  );
};
