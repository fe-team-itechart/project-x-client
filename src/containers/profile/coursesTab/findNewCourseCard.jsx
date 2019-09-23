import React from 'react';

import styles from './styles.module.scss';

export const FindNewCourseCard = () => {
  return (
    <button type='button' className={styles.findNewCourseCard}>
      <div>
        <span>+</span>
      </div>
      <p>Find new course</p>
    </button>
  );
};
