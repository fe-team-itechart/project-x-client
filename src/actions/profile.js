import { createAction } from 'redux-actions';
import { profile } from './types';

const getProfileRequest = createAction(profile.GET_PROFILE_REQUEST);

const getProfileSuccess = createAction(profile.GET_PROFILE_SUCCESS);

const getProfileFailure = createAction(profile.GET_PROFILE_FAILURE);

const updateProfileRequest = createAction(profile.UPDATE_PROFILE_REQUEST);

const updateProfileSuccess = createAction(profile.UPDATE_PROFILE_SUCCESS);

const updateProfileFailure = createAction(profile.UPDATE_PROFILE_FAILURE);

export {
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure
};