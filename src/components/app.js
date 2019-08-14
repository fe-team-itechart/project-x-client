import React from 'react';
import Header from '../containers/header';

import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
