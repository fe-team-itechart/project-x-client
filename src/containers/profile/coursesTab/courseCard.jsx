import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const CoursesCard = ({ type, img, name, progress, link }) => {
  const {
    card,
    card_type,
    img_block,
    course_name,
    progress_bar,
    current_progress,
    button,
  } = styles;

  return (
    <div className={card}>
      <div className={card_type}>{type}</div>
      <div className={img_block} style={{ backgroundImage: `url(${img})` }} />
      <p className={course_name}>{name}</p>
      <div className={progress_bar}>
        <div className={current_progress} style={{ width: progress }} />
      </div>
      <Link to={link}>
        <div className={button}>Continue</div>
      </Link>
    </div>
  );
};
