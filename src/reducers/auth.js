import { handleActions } from 'redux-actions';

import types from '../actions/types';

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

const loginSuccess = (state, { payload }) => ({
  ...state,
  isAuthenticated: true,
  loading: false,
  user: payload,
});

const loginFailure = state => ({
  ...state,
  isAuthenticated: false,
  loading: false,
});

export default handleActions(
  {
    [types.LOGIN_SUCCESS]: loginSuccess,
    [types.LOGIN_FAILURE]: loginFailure,
    [types.SOCIAL_LOGIN_SUCCESS]: loginSuccess,
    [types.SOCIAL_LOGIN_FAILURE]: loginFailure,
  },
  initialState
);
