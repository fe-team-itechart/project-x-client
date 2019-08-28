import { call, put, takeEvery } from 'redux-saga/effects';
import types from '../actions/types';
import * as actions from '../actions/auth';

import {
  googleLoginRequest,
  linkedInLoginRequest,
  registerRequest,
  loginRequest,
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

function* googleLogin(payload) {
  try {
    const response = yield call(googleLoginRequest, payload);
    yield put(actions.googleLoginSuccess(response));
  } catch (err) {
    yield put(actions.googleLoginFailure());
  }
}

function* linkedInLogin(res) {
  try {
    const response = yield call(linkedInLoginRequest, res);
    yield put(actions.linkedInLoginSuccess(response));
  } catch (err) {
    yield put(actions.linkedInLoginFailure());
  }
}
export default function*() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.REGISTER_REQUEST, register);
  yield takeEvery(types.GOOGLE_LOGIN_REQUEST, googleLogin);
  yield takeEvery(types.LINKEDIN_LOGIN_REQUEST, linkedInLogin);
}
