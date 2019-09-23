import { createAction } from 'redux-actions';

import { auth } from './types';

const registerRequest = createAction(auth.REGISTER_REQUEST);

const loginRequest = createAction(auth.LOGIN_REQUEST);

const loginSuccess = createAction(auth.LOGIN_SUCCESS);

const loginFailure = createAction(auth.LOGIN_FAILURE);

const logOutRequest = createAction(auth.LOGOUT_REQUEST);

const logOutSuccess = createAction(auth.LOGOUT_SUCCESS);

const socialLoginRequest = createAction(auth.SOCIAL_LOGIN_REQUEST);

const socialLoginSuccess = createAction(auth.SOCIAL_LOGIN_SUCCESS);

const socialLoginFailure = createAction(auth.SOCIAL_LOGIN_FAILURE);

const refreshLoginRequest = createAction(auth.REFRESH_LOGIN_REQUEST);

const refreshLoginSuccess = createAction(auth.REFRESH_LOGIN_SUCCESS);

const refreshLoginFailure = createAction(auth.REFRESH_LOGIN_FAILURE);

export {
  registerRequest,
  loginRequest,
  loginSuccess,
  loginFailure,
  logOutRequest,
  logOutSuccess,
  socialLoginRequest,
  socialLoginSuccess,
  socialLoginFailure,
  refreshLoginRequest,
  refreshLoginSuccess,
  refreshLoginFailure,
};
