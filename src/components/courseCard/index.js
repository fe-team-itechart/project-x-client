import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Img from '../img/index';

import styles from './style.module.scss';

import { links } from '../../utils/constants';

export const CourseCard = course => {
  const { title, authors, rate, price = 'NoPrice', img = '', id } = course;

  return (
    <Link
      to={`${links.coursePreview}${id}`}
      className={styles.courseCardWrapper}>
      <figure className={styles.courseCard}>
        <Img
          src={img}
          alt="Course Preview"
          className={styles.courseCardPreview}
        />
        <section className={styles.courseCardDescription}>
          <h2 className={styles.courseCardTitle}>{title}</h2>
          <div className={styles.courseCardAuthor}>{authors}</div>
          <div className={styles.courseCardRate}>
            <StarRatings
              rating={rate}
              starRatedColor="#ff8c05"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="5px"
              name="rating"
            />
            ({rate})
          </div>
          <div className={styles.courseCardPrice}>{price}</div>
        </section>
      </figure>
    </Link>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    rate: PropTypes.number,
    price: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.number,
    votes: PropTypes.number,
  }),
};

CourseCard.defaultProps = {
  course: {
    price: 'For Free',
    img: ''
  },
};
