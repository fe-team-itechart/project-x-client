import React from 'react';

import styles from './styles.module.scss';

export const FindNewCourseCard = () => {
  return (
    <button type='button' className={styles.find_new_course_card}>
      <div>
        <span>+</span>
      </div>
      <p>Find new course</p>
    </button>
  );
};
