import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import types from '../actions/types';
import * as actions from '../actions/auth';
import setAuthToken from '../services/setAuthToken';
import { registerRequest, loginRequest } from '../services/auth';
import { googleLoginRequest } from '../services/auth';

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
export default function*() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.REGISTER_REQUEST, register);
  yield takeEvery(types.GOOGLE_LOGIN_REQUEST, googleLogin);
}
