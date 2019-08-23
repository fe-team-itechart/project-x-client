import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import { App } from './components/app';


import './scss/base.scss';
import { configureStore } from './store/index';
import resetPassword from './components/resetPassword/index';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/r' component={resetPassword}/>
    </Router>
    <App />
  </Provider>,
  document.getElementById('root')
);
