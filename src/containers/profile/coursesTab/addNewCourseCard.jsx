import React from 'react';

import styles from './styles.module.scss';

export const AddNewCourseCard = () => {
  return (
    <div className={styles.add_new_course_card}>
      <div>
        <p>+</p>
      </div>
      <p>Add new course</p>
    </div>
  );
};
