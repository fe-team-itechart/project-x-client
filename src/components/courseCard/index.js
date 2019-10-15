import React, { useState } from 'react';
import Rating from '../rating/index';


import styles from './style.module.scss';
import { Redirect } from 'react-router-dom';
import { links } from '../../utils/constants';

export default function CourseCard({ item }) {
  const { title, author, rate, price, img, id = 1, votes } = item;
  const [redirect, setRedirect] = useState(false);
  const redirection = e => {
    e.preventDefault()
    e.stopPropagation();
    setRedirect(true);
  };

  const handlerRating = e => {
    e.stopPropagation();
    if(e.currentTarget.tagName === 'LABEL') {
      return false;
    }
    // the place for onClick rating Handler.
  };

  return !redirect ? (
    <figure className={styles.courseCard} onClick={redirection}>
      <img
        src={img}
        alt="Course Preview"
        className={styles.courseCardPreview}
      />
      <section className={styles.courseCardDescription}>
        <h2 className={styles.courseCardTitle}>{title}</h2>
        <div className={styles.courseCardAuthor}>{author}</div>
        <div className={styles.courseCardRate}>
          <Rating rate={rate} votes={votes} handler={handlerRating} />
        </div>
        <div className={styles.courseCardPrice}>{price}</div>
      </section>
    </figure>
  ) : (
    <Redirect
      push
      to={{
        pathname: `${links.coursePreview}${id}`,
      }}
    />
  );
}
