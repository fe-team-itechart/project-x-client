import { call, put, takeEvery } from 'redux-saga/effects';

import jwtDecode from 'jwt-decode';

import types from '../actions/types';
import * as actions from '../actions/auth';
import {
  socialLoginRequest,
  registerRequest,
  loginRequest,
  logOutRequest,
} from '../services/auth';

function* register({ payload }) {
  try {
    const response = yield call(registerRequest, payload);
    yield put(actions.loginSuccess(response));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* login({ payload }) {
  try {
    const response = yield call(loginRequest, payload);
    yield put(actions.loginSuccess(response));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* socialLogin(payload) {
  try {
    const response = yield call(socialLoginRequest, payload);
    yield put(actions.socialLoginSuccess(response));
  } catch (err) {
    yield put(actions.socialLoginFailure());
  }
}

function* logout() {
  yield call(logOutRequest);
  yield put(actions.logOutSuccess());
}

function* refreshLogin() {
  if (localStorage.token) {
    const user = jwtDecode(localStorage.token);
    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      yield put(actions.refreshLoginFailure());
      return;
    }
    yield put(actions.refreshLoginSuccess(user));
    return;
  }
  yield put(actions.refreshLoginFailure());
}

export default function*() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.REGISTER_REQUEST, register);
  yield takeEvery(types.SOCIAL_LOGIN_REQUEST, socialLogin);
  yield takeEvery(types.REFRESH_LOGIN_REQUEST, refreshLogin);
  yield takeEvery(types.LOGOUT_REQUEST, logout);
}
