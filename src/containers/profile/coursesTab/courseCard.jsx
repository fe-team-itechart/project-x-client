import React from 'react';

import { SubscribedCourseCard } from './subscribedCourseCard';
import { CreatedCourseCard } from './createdCourseCard';
import { FindNewCourseCard } from './findNewCourseCard';
import { AddNewCourseCard } from './addNewCourseCard';

export const CourseCard = courseProps => {
  const { course, subscribed, created, addCourse, findCourse } = courseProps;
  return (
    <>
      {subscribed && <SubscribedCourseCard course={course} />}
      {created && <CreatedCourseCard course={course} />}
      {addCourse && <AddNewCourseCard />}
      {findCourse && <FindNewCourseCard />}
    </>
  );
};
