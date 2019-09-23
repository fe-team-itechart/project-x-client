import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from "./profileTab";
import { SettingsTab } from './settingsTab';
import Account from './accountTab';
import { CoursesTab } from './coursesTab';


import styles from './styles.module.scss';

export class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
        <Switch>
          <Route path="/profile-public" component={Profile} />
          <Route path="/profile-courses" component={CoursesTab} />
          <Route path="/profile-account" component={Account} />
          <Route path="/profile-settings" component={SettingsTab} />
        </Switch>
      </section>
    );
  }
};