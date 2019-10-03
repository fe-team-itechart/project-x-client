import { httpService } from './httpService';
import { links } from '../utils/constants';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getCoursesForCarousel = async () => {
  const { data } = await httpService.get({
    url: links.corsesCarouselRoute,
    config,
  });
  return data;
};
