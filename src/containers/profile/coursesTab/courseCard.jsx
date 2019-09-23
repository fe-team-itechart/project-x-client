import React from 'react';

import PropTypes from 'prop-types';

import { SubscribedCourseCard } from './subscribedCourseCard';
import { CreatedCourseCard } from './createdCourseCard';
import { FindNewCourseCard } from './findNewCourseCard';
import { AddNewCourseCard } from './addNewCourseCard';

export const CourseCard = courseProps => {
  const { course, subscribed, created, addCourse, findCourse, key } = courseProps;
  return (
    <>
      {subscribed && <SubscribedCourseCard course={course} />}
      {created && <CreatedCourseCard course={course} />}
      {addCourse && <AddNewCourseCard />}
      {findCourse && <FindNewCourseCard />}
    </>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object,
  subscribed: PropTypes.bool,
  created: PropTypes.bool,
  addCourse: PropTypes.bool,
  findCourse: PropTypes.bool,
};