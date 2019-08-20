import { createAction } from 'redux-actions';
import types from './types';

const registerRequest = createAction(types.REGISTER_REQUEST);

const loginRequest = createAction(types.LOGIN_REQUEST);

const loginSuccess = createAction(types.LOGIN_SUCCESS);

const loginFailure = createAction(types.LOGIN_FAILURE);


const gooogleLoginRequest = createAction(types.LOGIN_REQUEST);

const gooogleLoginSuccess = createAction(types.LOGIN_SUCCESS);

const gooogleLoginFailure = createAction(types.LOGIN_FAILURE);

export {
  registerRequest,
  loginRequest,
  loginSuccess,
  loginFailure,
  gooogleLoginFailure,
  gooogleLoginSuccess,
  gooogleLoginRequest
};
