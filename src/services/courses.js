import { httpService } from './httpService';
import { links } from '../utils/constants';
import { storageWrapper } from './storageService';


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

export const subscribeCourse = async (courseId) => {
  const configuration = {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': storageWrapper.getToken()
    }
  };

  const { data } = await httpService.post({
    url: `${links.subscribeCourse}/${courseId}`,
    config: configuration,
    data: {}
  });

  return data.data;
}

export const subscribeCourseCheck = async (courseId) => {
  const configuration = {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': storageWrapper.getToken()
    },
    validateStatus: status => status >= 200 && status < 500,
  };
  
  const { data } = await httpService.get({
    url: `${links.subscribeCourseCheck}/${courseId}`,
    config: configuration,
    data: {}
  });

  const response = (data.status >= 300) ? data : data.data;
  
  return response;
}