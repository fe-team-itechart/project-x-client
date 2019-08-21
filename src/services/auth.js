import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';

export const googleLoginRequest = res => {
  return axios.post('api/users/google/auth', res).then(res => {
    const { token } = res.data;
    const decoded = jwt_decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    return decoded;
  });
};