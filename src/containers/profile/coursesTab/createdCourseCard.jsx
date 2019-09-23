import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const CreatedCourseCard = ({ course}) => {
  const { type, img, name, link } = course;

  return (
    <div className={styles.card}>
      <div className={styles.cardType}>{type}</div>
      <div className={styles.imgBlock} style={{ backgroundImage: `url(${img})` }} />
      <p className={styles.courseName}>{name}</p>
      <Link to={link}>
        <button type='button' className={styles.button}>Continue</button>
      </Link>
    </div>
  );
};
