import React, { Component } from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './styles.module.scss';

class CoursesCarousel extends Component {
  state = {};

  galleryItems = () => {
    return Array(12)
      .fill()
      .map((item, i) => (
        <div className={styles.course_card_container}>
          <button type="button" className={styles.adding_button}>
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

    return (
      <section className={styles.carousel_container}>
        <button
          className={styles.nav_button}
          type="button"
          onClick={this.prevItem}>
          <IoIosArrowBack color="white" size="large" />
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
          className={styles.nav_button}
          type="button"
          onClick={this.nextItem}>
          <IoIosArrowForward color="white" size="large" />
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
