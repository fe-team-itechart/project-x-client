import React from 'react';

import styles from './styles.module.scss';

export const AddNewCourseCard = () => {
  return (
    <button type='button' className={styles.add_new_course_card}>
      <div>
        <span>+</span>
      </div>
      <p>Add new course</p>
    </button>
  );
};
