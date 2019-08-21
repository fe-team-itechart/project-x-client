import axios from 'axios';

const config = {
  headers: { 'Content-Type': 'application/json' },
};

export const registerRequest = data => {
  return axios.post('api/users/registration', data, config);
};

export const loginRequest = data => {
  return axios.post('api/users/login', data, config);
};
