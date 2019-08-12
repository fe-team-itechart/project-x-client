import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import './scss/base.scss';
import { configureStore } from './store/index';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>App</div>
  </Provider>,
  document.getElementById('root')
);
