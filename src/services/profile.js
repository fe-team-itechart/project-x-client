import { httpService } from './httpService';
import { storageWrapper } from './storageService';
import { links } from '../utils/constants';

export const getProfileRequest = async () => {
  const config = {
    headers: {
      Authorization: storageWrapper.getToken(),
    },
  };

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
  });
  return profile;
};
