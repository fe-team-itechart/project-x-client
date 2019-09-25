import { httpService } from './httpService';
import { storageWrapper } from './storageService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getProfileRequest = async () => {
  config.headers.Authorization = storageWrapper.getToken();

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
