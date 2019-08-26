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
