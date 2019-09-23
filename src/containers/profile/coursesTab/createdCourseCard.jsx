import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const CreatedCourseCard = ({ course }) => {
  const { card, card_type, img_block, course_name, button } = styles;
  const { type, img, name, link } = course;

  return (
    <div className={card}>
      <div className={card_type}>{type}</div>
      <div className={img_block} style={{ backgroundImage: `url(${img})` }} />
      <p className={course_name}>{name}</p>
      <Link to={link}>
        <button type='button' className={button}>Continue</button>
      </Link>
    </div>
  );
};

CreatedCourseCard.propTypes = {
  type: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};