import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Img from '../img/index';

import styles from './style.module.scss';

import { links } from '../../utils/constants';

const CourseCard = ({ item }) => {
  const {
    title = 'NoTitle',
    author = 'NoName',
    rate = 0,
    price = 'NoPrice',
    img = '',
    id = 1,
    votes = 0,
  } = item;

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
          <div className={styles.courseCardAuthor}>{author}</div>
          <div className={styles.courseCardRate}>
            <StarRatings
              rating={rate}
              starRatedColor="#ff8c05"
              numberOfStars={5}
              starDimension='20px'
              starSpacing='5px'
              name='rating'
            />
            ({votes})
          </div>
          <div className={styles.courseCardPrice}>{price}</div>
        </section>
      </figure>
    </Link>
  );
};

CourseCard.propTypes = {
  item: PropTypes.shape({
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
  item: {
    title: 'DefaultTitle',
    author: 'NoName',
    rate: 4.5,
    price: 'For Free',
    img: '',
    id: 1,
    votes: 0,
  },
};

export default CourseCard;
