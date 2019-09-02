import axios from 'axios';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get = ({ url, params = {}, config = {} }) => {
    const path = this.baseUrl + url;

    return axios.get(path, params, config);
  };

  post = ({ url, data, config = {} }) => {
    const path = this.baseUrl + url;

    return axios.post(path, data, config);
  };

  put = ({ url, id, data, config = {} }) => {
    const path = `${this.baseUrl + url}/${id}`;

    return axios.put(path, data, config);
  };

  delete = ({ url, id, config = {} }) => {
    const path = `${this.baseUrl + url}/${id}`;

    return axios.delete(path, config);
  };
}

export const httpService = new HttpService('api/');
