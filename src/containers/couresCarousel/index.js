import React, { Component } from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './styles.module.scss';

class CoursesCarousel extends Component {
  state = { currentIndex: 0 };

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  galleryItems = () => {
    return Array(7)
      .fill()
      .map((item, i) => (
        <div className={styles.course_card_container}>
          <figure className={styles.image} />
          <p className={styles.name}>React js</p>
          <p className={styles.duration}>Duration: 35d</p>
          <button type="button">View</button>
        </div>
      ));
  };

  render() {
    const responsive = {
      0: {
        items: 5,
      },
    };

    return (
      <section className={styles.carousel_container}>
        <AliceCarousel
          items={this.galleryItems()}
          mouseDragEnabled
          infinite={false}
          responsive={responsive}
          dotsDisabled={true}
          onSlideChanged={this.onSlideChanged}
        />
        <div>
          <button onClick={() => this.slidePrev()}>Prev button</button>
          <button onClick={() => this.slideNext()}>Next button</button>
        </div>
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
