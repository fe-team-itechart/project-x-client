import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import types from '../actions/types';
import * as actions from '../actions/auth';
import setAuthToken from '../services/setAuthToken';
import { registerRequest, loginRequest } from '../services/auth';
import { googleLoginRequest } from '../services/auth';


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
    const response = yield call(registerRequest, body);
    yield put(actions.loginSuccess(response));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* login({ payload: { email, password } }) {
  const body = JSON.stringify({ email, password });
  try {
    const response = yield call(loginRequest, body);
    yield put(actions.loginSuccess(response));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* googleLogin(res) {
  try {
    const response = yield call(googleLoginRequest, res);
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
