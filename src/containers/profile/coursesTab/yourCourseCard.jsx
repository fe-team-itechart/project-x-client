import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const YourCourseCard = ({ type, img, name, link }) => {
  const { card, card_type, img_block, course_name, button } = styles;

  return (
    <div className={card}>
      <div className={card_type}>{type}</div>
      <div className={img_block} style={{ backgroundImage: `url(${img})` }} />
      <p className={course_name}>{name}</p>
      <Link to={link}>
        <div className={button}>Continue</div>
      </Link>
    </div>
  );
};
