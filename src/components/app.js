import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';

import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

import Header from '../containers/header';
import { Main } from './main';
import { Footer } from './footer/index';
import { ErrorBoundary } from './errorBoundary'
import { refreshLoginRequest } from '../actions/auth';

import styles from './styles.module.scss';

const history = createBrowserHistory();

class App extends Component {
  componentDidMount = () => {
    this.props.refreshLoginRequest();
  };

  render() {
    return (
      <div className={styles.page}>
        <Router history={history}>
          <ErrorBoundary>
          <Header />
          <Main />
          <Footer />
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  refreshLoginRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  refreshLoginRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(App);