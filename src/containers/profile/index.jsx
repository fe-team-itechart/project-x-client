import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfileData from './profile/index';
import { Settings } from './settings';
import Account from './account';
import { Courses } from './courses';

import styles from './styles.module.scss';

class ProfileRouters extends Component {
  render() {
    return (
      <section className={styles.profile}>
        <Switch>
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            path="/profile-public"
            component={ProfileData}
          />
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            path="/profile-courses"
            component={Courses}
          />
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            path="/profile-account"
            component={Account}
          />
          <PrivateRoute
            isAuthenticated={this.props.isAuthenticated}
            path="/profile-settings"
            component={Settings}
          />
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
