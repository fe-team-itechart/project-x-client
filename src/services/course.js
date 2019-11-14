import { httpService } from './httpService';
import { links } from '../utils/constants';
import { storageWrapper } from './storageService';

export const getCourseDetails = async id => {
  let response = {};

  try {
    const course = await httpService.get({
      url: links.coursePreviewRoute + id,
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
  });

  return data;
};

export const getCoursesByAttribute = async (search, limit) => {
  const { data } = await httpService.get({
    url: links.searchCourses,
    params: {
      search,
      limit,
    },
  });

  return data.data;
};

export const subscribeCourse = async courseId => {
  const config = {
    headers: {
      Authorization: storageWrapper.getToken(),
    },
  };

  const { data } = await httpService.post({
    url: `${links.subscribeCourse}/${courseId}`,
    config,
    data: {},
  });

  return data.data;
};

export const subscribeCourseCheck = async courseId => {
  const config = {
    headers: {
      Authorization: storageWrapper.getToken(),
    },
    validateStatus: status => status >= 200 && status < 500,
  };

  const { data } = await httpService.get({
    url: `${links.subscribeCourseCheck}/${courseId}`,
    config,
    data: {},
  });

  const response = data.status >= 300 ? data : data.data;

  return response;
};
