import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/index';

import styles from './style.module.scss';

import { links } from '../../utils/constants';
import Img from '../img/index';

export default function CourseCard({ item }) {
  const { title, author, rate, price, img = '', id = 1, votes } = item;

  return (
    <Link to={`${links.coursePreview}${id}`} className={styles.courseCardWrapper}>
      <figure className={styles.courseCard} >
        <Img
          src={img}
          alt="Course Preview"
          className={styles.courseCardPreview}
        />
        <section className={styles.courseCardDescription}>
          <h2 className={styles.courseCardTitle}>{title}</h2>
          <div className={styles.courseCardAuthor}>{author}</div>
          <div className={styles.courseCardRate}>
            <Rating rate={rate} votes={votes}/>
          </div>
          <div className={styles.courseCardPrice}>{price}</div>
        </section>
      </figure>
    </Link>
  );
}
