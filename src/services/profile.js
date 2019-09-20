import { httpService } from './httpService';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getProfileRequest = async () => {
  config.headers.Authorization = localStorage.token;

  const { data } = await httpService.get({ url: 'profile/public', config });
  return data;
};

export const updateProfileRequest = async data => {
  const { data: profile } = await httpService.put({
    url: 'profile/public',
    data,
    config,
  });
  return profile;
};
