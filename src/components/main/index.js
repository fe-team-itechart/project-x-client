import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from '../layout';
import { GettingStarted } from '../help/gettingStarted';
import { ProfileRouters } from '../../containers/profile';
import { Trobleshooting } from '../help/troubleshooting';
import { CourseTaking } from '../help/courseTaking';
import ResetPassword from '../../containers/auth/resetPassword';
import Catalogue from '../../containers/catalogue';
import Sources from '../../containers/sources';
import Categories from '../../containers/categories';
import CourseCard from '../courseCard';
import Img from './../img/index';

export const Main = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Layout} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/getting-started" component={GettingStarted} />
      <Route path="/troubleshooting" component={Trobleshooting} />
      <Route path="/course-taking" component={CourseTaking} />
      <Route path="/reset" component={ResetPassword} />
      <Route exact path='/course-card-previews'>
        <CourseCard item={{ title: 'Course', author: 'Writer', rate: 2.1, price: '100 $', img: 'http://placeimg.com/320/240/any'}}/>
      </Route>
      <Route exact path='/course/preview/:id' render={({match}) => (<div>Course with id = {match.params.id}</div>)} />
      <ProfileRouters />
    </Switch>
    <Img src='http://placeimg.com/320/240/any' />
    </>
  );
};
