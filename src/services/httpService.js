import axios from 'axios';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.service = axios.create();
  }

  get = async ({ url, params = {}, config = {} }) => {
    const path = this.baseUrl + url;

    const response = await this.service.request({
      method: 'get',
      url: path,
      params,
      ...config,
    });

    return response;
  };

  post = async ({ url, data, config = {} }) => {
    const path = this.baseUrl + url;

    const response = await this.service.request({
      method: 'post',
      url: path,
      data,
      ...config,
    });

    return response;
  };

  put = async ({ url, id, data, config = {} }) => {
    const path = `${this.baseUrl + url}/${id}`;
    
    const response = await this.service.request({
      method: 'put',
      url: path,
      data,
      ...config,
    });

    return response;
  };

  delete = async ({ url, id, config = {} }) => {
    const path = `${this.baseUrl + url}/${id}`;

    const response = await this.service.request({
      method: 'delete',
      url: path,
      ...config,
    });

    return response;
  };
}

export const httpService = new HttpService('api/');
