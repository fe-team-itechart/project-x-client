import React, { Component } from 'react';

import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { getCoursesForCarousel } from '../../services/courses';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './styles.module.scss';

const responsive = {
  1800: {
    items: 5,
  },
  1430: {
    items: 4,
  },
  1070: {
    items: 3,
  },
  730: {
    items: 2,
  },
  370: {
    items: 1,
  },
};

class CoursesCarousel extends Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCoursesForCarousel().then(courses => {
      this.setState({ courses });
    });
  }

  galleryItems = () => {
    return this.state.courses.map((item, i) => (
      <div className={styles.courseCardContainer}>
        <button type="button" className={styles.addingButton}>
          +
        </button>
        <figure className={styles.image} />
        <p className={styles.name}>{item.title}</p>
        <p className={styles.duration}>
          Number of lessons: {item.numberOfLessons}
        </p>
        <button type="button">View</button>
      </div>
    ));
  };

  nextItem = () => {
    this.Carousel.slideNext();
  };

  prevItem = () => {
    this.Carousel.slidePrev();
  };

  render() {
    return (
      <section className={styles.carouselContainer}>
        <button
          className={styles.navButton}
          type="button"
          onClick={this.prevItem}>
          <IoIosArrowBack color="white" className={styles.carouselArrows} />
        </button>
        <div className={styles.carousel}>
          <AliceCarousel
            items={this.galleryItems()}
            mouseDragEnabled
            infinite={false}
            responsive={responsive}
            buttonsDisabled
            ref={el => (this.Carousel = el)}
          />
        </div>
        <button
          className={styles.navButton}
          type="button"
          onClick={this.nextItem}>
          <IoIosArrowForward color="white" className={styles.carouselArrows} />
        </button>
      </section>
    );
  }
}

export default CoursesCarousel;
