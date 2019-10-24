import React, { Component } from 'react';

import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { getCoursesForCarousel } from '../../services/courses';
import CourseCard from '../courseCard';

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
    currentIndex: 0,
    lastSlide: 0,
    slide: 0,
    galleryItems: [],
  };

  async componentDidMount() {
    const { data } = await getCoursesForCarousel();
    this.setState({
      courses: data,
    });
    this.setState({
      galleryItems: this.galleryItems(),
    });
  }

  slidePrev = () => {
    this.Carousel.slidePrev();
  };

  slideNext = () => {
    this.Carousel.slideNext();
  };

  onSlideChanged = e => {
    const lastSlide = Math.ceil(
      this.state.galleryItems.length / e.itemsInSlide
    );

    this.setState({
      currentIndex: e.item,
      slide: e.slide + 1,
      lastSlide,
    });
  };

  galleryItems() {
    return this.state.courses
      ? this.state.courses.map((course, index) => (
          <div className={styles.courseCardContainer}>
            <CourseCard
              key={index}
              title={course.courseName}
              authors={course.authors}
              rate={course.rating}
              id={course.id}
              price={course.price}
            />
          </div>
        ))
      : null;
  }

  render() {
    const { galleryItems, currentIndex, lastSlide, slide } = this.state;
    
    return (
      <section className={styles.carouselContainer}>
        <button
          className={styles.navButton}
          type="button"
          onClick={this.slidePrev}>
          <IoIosArrowBack
            color="white"
            className={
              currentIndex > 0
                ? styles.carouselArrows
                : `${styles.carouselArrows} ${styles.disabled}`
            }
          />
        </button>
        <div className={styles.carousel}>
          <AliceCarousel
            items={galleryItems}
            mouseDragEnabled
            infinite={false}
            responsive={responsive}
            buttonsDisabled
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
            ref={el => (this.Carousel = el)}
          />
        </div>
        <button
          className={styles.navButton}
          type="button"
          onClick={this.slideNext}>
          <IoIosArrowForward
            color="white"
            className={
              slide !== lastSlide || lastSlide === 0
                ? styles.carouselArrows
                : `${styles.carouselArrows} ${styles.disabled}`
            }
          />
        </button>
      </section>
    );
  }
}

export default CoursesCarousel;
