import jwt_decode from 'jwt-decode';
import axios from 'axios';

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

export const changePassword = async (id, data) => {
  const res = await httpService.put({ url: 'users/change-password', id, data });
  return res;
};
