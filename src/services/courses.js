import { httpService } from './httpService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
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
