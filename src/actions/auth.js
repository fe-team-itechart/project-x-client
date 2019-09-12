import { createAction } from 'redux-actions';
import types from './types';

const registerRequest = createAction(types.REGISTER_REQUEST);

const loginRequest = createAction(types.LOGIN_REQUEST);

const loginSuccess = createAction(types.LOGIN_SUCCESS);

const loginFailure = createAction(types.LOGIN_FAILURE);

const logOutRequest = createAction(types.LOGOUT_REQUEST);

const logOutSuccess = createAction(types.LOGOUT_SUCCESS);

const socialLoginRequest = createAction(types.SOCIAL_LOGIN_REQUEST);

const socialLoginSuccess = createAction(types.SOCIAL_LOGIN_SUCCESS);

const socialLoginFailure = createAction(types.SOCIAL_LOGIN_FAILURE);

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
};
