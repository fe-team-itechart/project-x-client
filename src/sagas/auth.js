import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import types from '../actions/types';
import * as actions from '../actions/auth';
import setAuthToken from '../services/setAuthToken';
import { registerRequest, loginRequest } from '../services/auth';

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
    const {
      data: { token: token },
    } = yield call(registerRequest, body);
    const decoded = jwt_decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    yield put(actions.loginSuccess(decoded));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

function* login({ payload: { email, password } }) {
  const body = JSON.stringify({ email, password });
  try {
    const {
      data: { token: token },
    } = yield call(loginRequest, body);
    const decoded = jwt_decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    yield put(actions.loginSuccess(decoded));
  } catch (err) {
    yield put(actions.loginFailure(err));
  }
}

export default function*() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.REGISTER_REQUEST, register);
}
