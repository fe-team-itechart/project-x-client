import { call, put, takeEvery } from 'redux-saga/effects';

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
    yield payload.resolve();
  } catch (err) {
    yield put(actions.loginFailure());
    yield payload.reject(err);
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

export default function*() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.REGISTER_REQUEST, register);
  yield takeEvery(types.SOCIAL_LOGIN_REQUEST, socialLogin);
  yield takeEvery(types.LOGOUT_REQUEST, logout);
}
