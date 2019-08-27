import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';

export const googleLoginRequest = res => {
  const decoded = jwt_decode(res.payload);
  localStorage.setItem('token', res.payload);
  setAuthToken(res.payload);
  return decoded;
};

export const linkedInLoginRequest = res => {
  const decoded = jwt_decode(res.payload);
  localStorage.setItem('token', res.payload);
  setAuthToken(res.payload);
  return decoded;
};
