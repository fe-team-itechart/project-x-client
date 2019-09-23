import React, { Component } from 'react';
import { connect } from 'react-redux';

import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './styles.module.scss';

const responsive = {
  1650: {
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
  350: {
    items: 1,
  },
};

class CoursesCarousel extends Component {
  state = {};

  galleryItems = () => {
    return Array(12)
      .fill()
      .map((item, i) => (
        <div className={styles.courseCardContainer}>
          <button type="button" className={styles.addingButton}>
            +
          </button>
          <figure className={styles.image} />
          <p className={styles.name}>React js</p>
          <p className={styles.duration}>Duration: 35d {i}</p>
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
          <IoIosArrowBack color="white" size="50px" />
        </button>
        <div className={styles.carousel}>
          <AliceCarousel
            items={this.galleryItems()}
            mouseDragEnabled
            infinite={false}
            responsive={responsive}
            dotsDisabled
            buttonsDisabled
            ref={el => (this.Carousel = el)}
          />
        </div>
        <button
          className={styles.navButton}
          type="button"
          onClick={this.nextItem}>
          <IoIosArrowForward color="white" size="50px" />
        </button>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesCarousel);
