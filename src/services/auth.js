import jwt_decode from 'jwt-decode';

import { httpService } from './httpService';
import { storageWrapper } from './storageService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const socialLoginRequest = res => {
  const decoded = jwt_decode(res.payload);
  storageWrapper.setToken(res.payload);

  return decoded;
};

export const registerRequest = async data => {
  try {
    const {
      data: { token },
    } = await httpService.post({ url: links.registrationRoute, data, config });
    const decoded = jwt_decode(token);
    storageWrapper.setToken(token);

    return decoded;
  } catch (err) {
    throw err.response.data;
  }
};

export const loginRequest = async data => {
  try {
    const {
      data: { token },
    } = await httpService.post({ url: links.loginRoute, data, config });
    const decoded = jwt_decode(token);
    storageWrapper.setToken(token);

    return decoded;
  } catch (err) {
    throw err.response.data;
  }
};

export const logOutRequest = () => {
  storageWrapper.deleteToken();
};

export const changePassword = async (id, data) => {
  const res = await httpService.put({
    url: links.changePasswordRoute,
    id,
    data,
    config,
  });
  return res;
};

export const forgotPasswordRequest = async data => {
  try {
    const response = await httpService.post({ url: links.resetRoute, data });
    return response.data;
  } catch (e) {
    return {
      status: 400,
      message: 'Bad email',
    };
  }
};

export const resetPassword = async ({ token, password, confirmPassword }) => {
  const response = await httpService.post({
    url: `users/reset-password`,
    data: {
      password,
      confirmPassword,
    },
    config: {
      ...config,
      headers: {
        ...config.headers,
        authorization: token,
      },
      validateStatus: status => status >= 200 && status < 500,
    },
  });
  return response.data;
};
