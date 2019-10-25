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

export const getCoursesForCarousel = async () => {
  const { data } = await httpService.get({
    url: links.coursesCarouselRoute,
    config,
  });

  return data;
};

export const getCoursesByAttribute = async (search, limit) => {
  const { data } = await httpService.get({
    url: links.searchCourses,
    config,
    params: {
      search,
      limit,
    },
  });

  return data.data;
};
