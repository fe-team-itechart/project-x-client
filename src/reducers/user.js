import { handleActions } from 'redux-actions';

import { auth, profile } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  data: null,
  profile: null,
  isProfileLoading: true,
};

const loginSuccess = (state, { payload }) => ({
  ...state,
  isAuthenticated: true,
  data: payload,
});

const loginFailure = state => ({
  ...state,
  isAuthenticated: false,
});

const logOutSuccess = state => ({
  ...state,
  isAuthenticated: false,
  data: null,
});

const profileSuccess = (state, { payload }) => ({
  ...state,
  profile: payload,
  isProfileLoading: false,
});

const profileFailure = state => ({
  ...state,
  profile: null,
  isProfileLoading: false,
});

export default handleActions(
  {
    [auth.LOGIN_SUCCESS]: loginSuccess,
    [auth.LOGIN_FAILURE]: loginFailure,
    [auth.SOCIAL_LOGIN_SUCCESS]: loginSuccess,
    [auth.SOCIAL_LOGIN_FAILURE]: loginFailure,
    [auth.LOGOUT_SUCCESS]: logOutSuccess,
    [auth.REFRESH_LOGIN_SUCCESS]: loginSuccess,
    [auth.REFRESH_LOGIN_FAILURE]: loginFailure,
    [profile.GET_PROFILE_SUCCESS]: profileSuccess,
    [profile.GET_PROFILE_FAILURE]: profileFailure,
    [profile.UPDATE_PROFILE_SUCCESS]: profileSuccess,
    [profile.UPDATE_PROFILE_FAILURE]: profileFailure,
  },
  initialState
);
