import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const SubscribedCourseCard = ({ course }) => {
  const { type, img, name, link, progress } = course;

  return (
    <div className={styles.card}>
      <div className={styles.cardType}>{type}</div>
      <div className={styles.imgBlock} style={{ backgroundImage: `url(${img})` }} />
      <p className={styles.courseName}>{name}</p>
      <div className={styles.progressBar}>
        <div className={styles.currentProgress} style={{ width: progress }} />
      </div>
      <Link to={link}>
        <button type='button' className={styles.button}>Continue</button>
      </Link>
    </div>
  );
};

SubscribedCourseCard.propTypes = {
  type: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  progress: PropTypes.string,
};