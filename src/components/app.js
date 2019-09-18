import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from '../containers/header';
import { Main } from './main';
import { Footer } from './footer/index';
import { refreshLoginRequest } from '../actions/auth';

import styles from './styles.module.scss';

const history = createBrowserHistory();

class App extends Component {
  componentDidMount = () => {
    this.props.refreshLoginRequest();
  };
  
  render() {
    return (
      <div className={styles.page}>
        <Router history={history}>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = {
  refreshLoginRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
