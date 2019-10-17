import { httpService } from './httpService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getCourseDetails = async id => {
  try {
    const response = await httpService.get({
      url: links.coursePreviewRoute + id,
      config,
    });

    return response;
  } catch (err) {
    return err.response.data;
  }
};
