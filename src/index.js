import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import { configureStore } from './store/index';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './scss/base.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
