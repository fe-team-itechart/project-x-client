import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProfileTab } from "./profileTab";
import { SettingsTab } from './settingsTab';
import { AccountTab } from './accountTab';
import { CoursesTab } from './coursesTab'; 

import styles from './styles.module.scss';

export class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
          <Switch>
            <Route path="/profile-public" component={ProfileTab} />
            <Route path="/profile-courses" component={CoursesTab} />
            <Route path="/profile-account" component={AccountTab} />
            <Route path="/profile-settings" component={SettingsTab} />
          </Switch>
      </section>
    );
  }
};