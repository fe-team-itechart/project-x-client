import React from 'react';
import { Switch } from 'react-router-dom';

import { PrivateRoute } from '../../components/privateRoute';
import ProfileData from './profile/index';
import Account from './account';
import Profile from './profile';

import styles from './styles.module.scss';

export const ProfileRouters = () => {
  return (
    <>
      <section className={styles.profileWrapper}>
        <Profile />
        <section className={styles.publicWrapper}>
          <Switch>
            <PrivateRoute path="/profile-public" component={ProfileData} />
            <PrivateRoute path="/profile-account" component={Account} />
          </Switch>
        </section>
      </section>
    </>
  );
};
