import React from 'react';
import Register from '../containers/auth/register';
import Login from '../containers/auth/login';

import { Profile } from '../containers/profile/';
import Header from '../containers/header';
import { Help } from './help';
import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Profile />
      <Help />
      <Footer />
    </div>
  );
};

export default App;
