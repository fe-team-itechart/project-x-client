import jwtDecode from 'jwt-decode';

export const isTokenValid = () => {
  if (localStorage.token) {
    const user = jwtDecode(localStorage.token);
    const currentTime = Date.now() / 1000;
    return user.exp > currentTime;
  }

  return false;
};
