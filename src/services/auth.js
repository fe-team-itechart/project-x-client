import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';

const config = {
  headers: { 'Content-Type': 'application/json' },
};

export const registerRequest = async data => {
  const {
    data: { token: token },
  } = await axios.post('api/users/registration', data, config);
  const decoded = jwt_decode(token);
  localStorage.setItem('token', token);
  setAuthToken(token);
  return decoded;
};

export const loginRequest = async data => {
  const {
    data: { token: token },
  } = await axios.post('api/users/login', data, config);
  const decoded = jwt_decode(token);
  localStorage.setItem('token', token);
  setAuthToken(token);
  return decoded;
};

export const googleLoginRequest = async data => {
  const {
    data: { token: token },
  } = await axios.post('api/users/google/auth', data);
  const decoded = jwt_decode(token);
  localStorage.setItem('token', token);
  setAuthToken(token);
  return decoded;
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
    const link = encodeURIComponent(linkId);
    const response = await axios.post(`api/users/reset/${link}`, {});
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
