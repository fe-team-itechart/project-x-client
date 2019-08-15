import React from 'react';

import Header from '../containers/header';
import { Help } from './help';
import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Help />
      <Footer />
    </div>
  );
};

export default App;
