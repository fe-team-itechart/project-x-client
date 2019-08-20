import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import types from '../actions/types';
import * as actions from '../actions/auth';
import setAuthToken from '../services/setAuthToken';

const registerRequest = data => {
  return axios.post('api/users/registration', data, {
    headers: { 'Content-Type': 'application/json' },
  });
};

const loginRequest = data => {
  return axios.post('api/users/login', data, {
    headers: { 'Content-Type': 'application/json' },
  });
};

function* register({
  payload: { firstName, lastName, email, password, passwordConfirm },
}) {
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  });
  try {
    const res = yield call(registerRequest, body);
    console.log(res);
    // const { token } = yield call(registerRequest, body);
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
  const body = JSON.stringify({ email, password });
  try {
    const res = yield call(loginRequest, body);
    console.log(res);
    // const { token } = yield call(loginRequest, body);
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
