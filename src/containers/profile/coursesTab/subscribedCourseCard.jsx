import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const SubscribedCourseCard = ({ course }) => {
  const {
    card,
    card_type,
    img_block,
    course_name,
    progress_bar,
    current_progress,
    button,
  } = styles;
  const { type, img, name, link, progress } = course;

  return (
    <div className={card}>
      <div className={card_type}>{type}</div>
      <div className={img_block} style={{ backgroundImage: `url(${img})` }} />
      <p className={course_name}>{name}</p>
      <div className={progress_bar}>
        <div className={current_progress} style={{ width: progress }} />
      </div>
      <Link to={link}>
        <button type='button' className={button}>Continue</button>
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