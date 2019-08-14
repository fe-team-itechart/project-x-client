import React from 'react';
import { Profile } from '../containers/profile/';
import Header from '../containers/header';
import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
