import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import  Info  from "./info";
import { Settings } from './settings';
import  Account  from './account';
import { Courses } from './courses';

import styles from './styles.module.scss';

export class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
        <Switch>
          <Route path="/profile-public" component={Info} />
          <Route path="/profile-courses" component={Courses} />
          <Route path="/profile-account" component={Account} />
          <Route path="/profile-settings" component={Settings} />
        </Switch>
      </section>
    );
  }
};