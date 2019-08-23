import React from 'react';

import { Profile } from '../containers/profile';
import Header from '../containers/header';
import { Main } from './main';
import { Help } from './help';
import { Footer } from './footer/index';

import styles from './styles.module.scss';

export const App = () => {
  return (
      <div className={styles.page}>
          <Header />
          <Main />
          <Profile />
          <Help />
          <Footer />
      </div>
  );
};

export default App;
