import React from 'react';

import { CourseCard } from './CourseCard';

import styles from './styles.module.scss';

export const CoursesTab = () => {
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
      img: 'https://proglib.io/wp-content/uploads/2017/08/jstips.jpg',
      name: 'JavaScript',
      progress: '15%',
      link: '',
    },
    {
      type: 'C',
      img:
        'https://go.tiny.cloud/wp-content/uploads/2018/02/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff.png',
      name: 'Angular 7',
      progress: '30%',
      link: '',
    },
  ];

  const createdCourses = [
    {
      type: 'Y',
      img: 'https://proglib.io/wp-content/uploads/2017/08/jstips.jpg',
      name: 'JavaScript',
      link: '',
    },
  ];

  return (
    <div>
      <div className={styles.courses}>
        {subscribedCourses.map(course => (
          <CourseCard course={course} subscribed={true} />
        ))}
        <CourseCard findCourse={true} />
      </div>
      <div className={styles.separator} />
      <div className={styles.courses}>
        {createdCourses.map(course => (
          <CourseCard course={course} created={true} />
        ))}
        <CourseCard addCourse={true} />
      </div>
    </div>
  );
};
