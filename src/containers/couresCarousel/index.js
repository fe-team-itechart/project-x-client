import React, { Component } from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './styles.module.scss';

class CoursesCarousel extends Component {
  state = { 
    currentIndex: 0 
  };

  galleryItems = () => {
    return Array(12)
      .fill()
      .map((item, i) => (
        <div className={styles.course_card_container}>
          <figure className={styles.image} />
          <p className={styles.name}>React js</p>
          <p className={styles.duration}>Duration: 35d {i}</p>
          <button type="button">View</button>
        </div>
      ));
  };

  nextItem = () => {
    this.Carousel.slideNext();
  }
  
  prevItem = () => {
    this.Carousel.slidePrev();
  }

  render() {
    const responsive = {
      1024: {
        items: 5,
      },
    };

    return (
      <section className={styles.carousel_container}>
        <button style={{width: '5%', float: 'left'}} type='button' onClick={this.prevItem}>Prev button</button>
        <div style={{width: '90%', float: 'left'}}>
          <AliceCarousel
            items={this.galleryItems()}
            mouseDragEnabled
            infinite={false}
            responsive={responsive}
            dotsDisabled
            buttonsDisabled
            ref={(el) => (this.Carousel = el)}
          />
        </div>
        <button style={{width: '5%', float: 'left'}} type='button' onClick={this.nextItem}>Next button</button>
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
