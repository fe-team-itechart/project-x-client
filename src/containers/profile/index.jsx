import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from '../../components/privateRoute';
import ProfileData from './profile/index';
import { Settings } from './settings';
import Account from './account';
import { Courses } from './courses';

import styles from './styles.module.scss';

export class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
        <Switch>
          <PrivateRoute path="/profile-public" component={ProfileData} />
          <PrivateRoute path="/profile-courses" component={Courses} />
          <PrivateRoute path="/profile-account" component={Account} />
          <PrivateRoute path="/profile-settings" component={Settings} />
        </Switch>
      </section>
    );
  }
}
