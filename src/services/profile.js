import { httpService } from './httpService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getProfileRequest = async () => {
  config.headers.Authorization = localStorage.token;

  const { data } = await httpService.get({
    url: links.publicProfileRoute,
    config,
  });
  return data;
};

export const updateProfileRequest = async data => {
  const { data: profile } = await httpService.put({
    url: links.publicProfileRoute,
    data,
    config,
  });
  return profile;
};
