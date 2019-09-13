import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProfileTab } from "./profileTab";
import { SettingsTab } from './settingsTab';
import { AccountTab } from './accountTab';
import { Profile } from './profile';
import { CoursesTab } from './coursesTab'; 
import styles from './styles.module.scss';
import './buttons.scss';

export class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
          <Profile/>
          <Switch>
            <Route exact path="/profile" component={ProfileTab} />
          </Switch>
          <Switch>
            <Route path="/profile/public" component={ProfileTab} />
            <Route path="/profile/courses" component={CoursesTab} />
            <Route path="/profile/account" component={AccountTab} />
            <Route path="/profile/settings" component={SettingsTab} />
          </Switch>
      </section>
    );
  }
};