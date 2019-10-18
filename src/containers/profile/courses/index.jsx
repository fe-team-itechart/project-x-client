import React from 'react';

import { CourseCard } from './courseCard';
import Profile from '../profile';

import styles from './styles.module.scss';

export const Courses = () => {
  const subscribedCourses = [
    {
      type: 'Lab',
      img:
        'https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png',
      name: 'React js',
      progress: '70%',
      link: '',
    },
    {
      type: 'Lab',
      img: 'https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png',
      name: 'JavaScript',
      progress: '15%',
      link: '',
    },
    {
      type: 'C',
      img:
        'https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png',
      name: 'Angular 7',
      progress: '30%',
      link: '',
    },
  ];

  const createdCourses = [
    {
      type: 'Y',
      img: 'https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png',
      name: 'JavaScript',
      link: '',
    },
  ];

  return (
    <>
      <Profile />
      <div>
        <div className={styles.courses}>
          {subscribedCourses.map((course, key) => (
            <div key={key}>
              <CourseCard course={course} subscribed={true} />
            </div>
          ))}
          <CourseCard findCourse={true} />
        </div>
        <div className={styles.separator} />
        <div className={styles.courses}>
          {createdCourses.map((course, key) => (
            <div key={key}>
              <CourseCard course={course} created={true} />
            </div>
          ))}
          <CourseCard addCourse={true} />
        </div>
      </div>
    </>
  );
};
