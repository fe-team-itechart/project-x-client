import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import types from '../actions/types';
import * as actions from '../actions/auth';
import setAuthToken from '../services/setAuthToken';

function* register({ payload: { firstName, lastName, email, password } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // const body = JSON.stringify({ firstName, lastName, email, password });
  try {
    // const { token } = yield call(axios.post, '/api/users/register', body, config);
    // const decoded = jwt_decode(token);
    // localStorage.setItem('token', token);
    // setAuthToken(token);
    // yield put(actions.loginSuccess(decoded));
    // yield put(actions.loginSuccess({ firstName, lastName, email, password }));
    // window.location.replace('/');
  } catch (err) {
    yield put(actions.loginFailure());
  }
}

function* login({ payload: { email, password } }) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    // const { token } = yield call(axios.post, '/api/users/login', body, config);
    // const decoded = jwt_decode(token);
    // localStorage.setItem('token', token);
    // setAuthToken(token);
    // yield put(actions.loginSuccess(decoded));
    // yield put(actions.loginSuccess({ email, password }));
    // window.location.replace('/');
  } catch (err) {
    yield put(actions.loginFailure());
  }
}

export default function*() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.REGISTER_REQUEST, register);
}
