import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../containers/header';
import { Main } from './main';
import { Footer } from './footer/index';

import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
