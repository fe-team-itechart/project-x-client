import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { PrivateRoute } from '../../components/privateRoute';
import Profile from './profileTab';
import { SettingsTab } from './settingsTab';
import Account from './accountTab';
import { CoursesTab } from './coursesTab';

import styles from './styles.module.scss';

class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
        <Switch>
          <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/profile-public" component={Profile} />
          <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/profile-courses" component={CoursesTab} />
          <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/profile-account" component={Account} />
          <PrivateRoute isAuthenticated={this.props.isAuthenticated} path="/profile-settings" component={SettingsTab} />
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null
)(ProfileRouters);
