import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../containers/header';
import { Main } from './main';
import { Footer } from './footer/index';

import styles from './styles.module.scss';

const history = createBrowserHistory();

export const App = () => {
  return (
    <div className={styles.page}>
      <Router history={history}>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
