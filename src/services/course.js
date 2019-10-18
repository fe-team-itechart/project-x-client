import { httpService } from './httpService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getCourseDetails = async id => {
  let response = {};

  try {
    const course = await httpService.get({
      url: links.coursePreviewRoute + id,
      config,
    });

    response = {
      error: false,
      data: course.data,
    };

    return response;
  } catch (error) {

    response = {
      error: true,
      data: error.response.data,
    };

    return response;
  }
};
