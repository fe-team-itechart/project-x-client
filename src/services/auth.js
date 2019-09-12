import jwt_decode from 'jwt-decode';

import setAuthToken from './setAuthToken';
import { httpService } from './httpService';

const config = {
  headers: { 'Content-Type': 'application/json' },
};

export const socialLoginRequest = res => {
  const decoded = jwt_decode(res.payload);
  localStorage.setItem('token', res.payload);
  setAuthToken(res.payload);

  return decoded;
};

export const registerRequest = async data => {
  const {
    data: { token },
  } = await httpService.post({ url: 'users/registration', data, config });
  const decoded = jwt_decode(token);
  localStorage.setItem('token', token);
  setAuthToken(token);

  return decoded;
};

export const loginRequest = async data => {
  const {
    data: { token },
  } = await httpService.post({ url: 'users/login', data, config });
  const decoded = jwt_decode(token);
  localStorage.setItem('token', token);
  setAuthToken(token);

  return decoded;
};

export const logOutRequest = () => {
  localStorage.removeItem('token');
};

export const changePassword = async (id, data) => {
  const res = await httpService.put({ url: 'users/change-password', id, data });
  return res;
};

export const forgotPasswordRequest = async data => {
  try {
    const response = await axios.post('api/users/reset', data);
    return response;
  } catch (e) {
    return {
      status: 400,
      data: 'Bad email',
    };
  }
};

export const resetApprove = async linkId => {
  try {
    const l = encodeURIComponent(linkId);
    const response = await axios.post(`api/users/reset/${l}`, {});
    return response;
  } catch (e) {
    return {
      status: 400,
      data: 'Link is uncorrected',
    };
  }
};

export const resetPassword = async ({
  linkId,
  password,
  passwordConfirm,
}) => {
  try {
    const response = await axios.post(`api/users/resetPassword`, {
      linkId,
      password,
      passwordConfirm,
    });
    return response;
  } catch (e) {
    return {
      status: 400,
      data: 'Something is wrong',
    };
  }
};
