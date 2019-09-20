import { call, put, takeEvery } from 'redux-saga/effects';

import { profile } from '../actions/types';
import * as actions from '../actions/profile';
import { getProfileRequest, updateProfileRequest } from '../services/profile';

function* getProfile() {
  try {
    const response = yield call(getProfileRequest);
    yield put(actions.getProfileSuccess(response));
  } catch (err) {
    yield put(actions.getProfileFailure());
  }
}

function* updateProfile({ payload }) {
  try {
    const response = yield call(updateProfileRequest, payload);
    yield put(actions.updateProfileSuccess(response));
  } catch (err) {
    yield put(actions.updateProfileFailure());
  }
}

export default function*() {
  yield takeEvery(profile.GET_PROFILE_REQUEST, getProfile);
  yield takeEvery(profile.UPDATE_PROFILE_REQUEST, updateProfile);
}
