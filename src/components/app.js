import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../containers/header';
import { Main } from './main';
import { Help } from './help';
import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Router>
        <Header />
        <Main />
        <Help />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
