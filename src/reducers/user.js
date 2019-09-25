import { handleActions } from 'redux-actions';

import { auth, profile } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: true,
  data: null,
  profile: null,
};

const loginSuccess = (state, { payload }) => ({
  ...state,
  isAuthenticated: true,
  loading: false,
  data: payload,
});

const loginFailure = state => ({
  ...state,
  isAuthenticated: false,
  loading: false,
});

const logOutSuccess = state => ({
  ...state,
  isAuthenticated: false,
  loading: false,
  data: null,
});

const profileSuccess = (state, { payload }) => ({
  ...state,
  profile: payload,
});

const profileFailure = state => ({
  ...state,
  profile: null,
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
