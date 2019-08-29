import React from 'react';
import styles from './styles.module.scss';
import { CoursesCard } from './courseCard';
import { YourCourseCard } from './yourCourseCard';

export const CoursesTab = () => {
  const {
    courses,
    add_new_course_card,
    find_new_course_card,
    separator,
  } = styles;

  const currentCourses = [
    {
      courseType: 'Lab',
      courseImg:
        'https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png',
      courseName: 'React js',
      courseProgress: '70%',
      courseLink: '',
    },
    {
      courseType: 'Lab',
      courseImg: 'https://proglib.io/wp-content/uploads/2017/08/jstips.jpg',
      courseName: 'JavaScript',
      courseProgress: '15%',
      courseLink: '',
    },
    {
      courseType: 'C',
      courseImg:
        'https://go.tiny.cloud/wp-content/uploads/2018/02/toptal-blog-image-1518187252525-03f6db7b1c131066061024c236c7e3ff.png',
      courseName: 'Angular 7',
      courseProgress: '30%',
      courseLink: '',
    },
  ];

  const createdCourses = [
    {
      courseType: 'Y',
      courseImg: 'https://proglib.io/wp-content/uploads/2017/08/jstips.jpg',
      courseName: 'JavaScript',
      courseLink: '',
    },
  ];

  return (
    <div>
      <div className={courses}>
        {currentCourses.map(course => (
          <CoursesCard
            type={course.courseType}
            img={course.courseImg}
            name={course.courseName}
            progress={course.courseProgress}
            link={course.courseLink}
          />
        ))}

        <div className={find_new_course_card}>
          <div>
            <p>+</p>
          </div>
          <p>Find new course</p>
        </div>
      </div>
      <div className={separator} />
      <div className={courses}>
        {createdCourses.map(course => (
          <YourCourseCard
            type={course.courseType}
            img={course.courseImg}
            name={course.courseName}
            link={course.courseLink}
          />
        ))}
        <div className={add_new_course_card}>
          <div>
            <p>+</p>
          </div>
          <p>Add new course</p>
        </div>
      </div>
    </div>
  );
};
