import axios from 'axios';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get = ({ url, params = {}, config = {} }) => {
    const route = this.baseUrl + url;

    return axios.get(route, params, config);
  };

  post = ({ url, data, config = {} }) => {
    const route = this.baseUrl + url;

    return axios.post(route, data, config);
  };

  put = ({ url, id, data, config = {} }) => {
    const route = `${this.baseUrl + url}/${id}`;

    return axios.put(route, data, config);
  };

  delete = ({ url, id, config = {} }) => {
    const route = `${this.baseUrl + url}/${id}`;

    return axios.delete(route, config);
  };
}

export const httpService = new HttpService('api/');
