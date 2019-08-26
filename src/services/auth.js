import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';

export const googleLoginRequest = res => {
  return axios.post('http://localhost:8080/api/users/auth/google', res).then(res => {
    const { token } = res.data;
    const decoded = jwt_decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    return decoded;
  });
};

export const linkedInLoginRequest = res => {
  console.log(res.payload);

  const url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${
    res.payload
  }&redirect_uri=http://localhost:3000&client_id=${
    process.env.CLIENT_ID_LINKEDIN
  }&client_secret=${process.env.SECRET_LINKEDIN}`;

  return axios
    .get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    .then(res => {
      // const { token } = res.data;
      // const decoded = jwt_decode(token);
      // localStorage.setItem('token', token);
      // setAuthToken(token);
      // return decoded;
      console.log(JSON.parse(res.data.contents));
    });
};
