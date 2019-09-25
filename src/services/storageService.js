class LocalStorageWrapper {
  getToken = () => {
    return localStorage.getItem('token');
  };

  setToken = token => {
    localStorage.setItem('token', token);
  };

  deleteToken = () => {
    localStorage.removeItem('token');
  };
}

export const storageWrapper = new LocalStorageWrapper();
