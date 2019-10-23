import React, { Component } from 'react';
import { connect } from 'react-redux';

import AliceCarousel from 'react-alice-carousel';
import { withTranslation } from 'react-i18next';
import Socials from '../../components/socials';

import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './styles.module.scss';
import './dotsStyles.scss';

class MainPage extends Component {
  sliderItems = () => {
    const { t } = this.props;

    const slides = [
      {
        header: `${t('Learn ! Potom DasPish !')}`,
        description: `${t(
          "We are learning the whole world ! If don't believe us you don't believe nobody."
        )}`,
      },
      {
        header: `${t('Lorem ipsum dolor sit amet consectetur adipisicing.')}`,
        description: `${t(
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum nobis similique delectus? Dolor, ut aliquid..'
        )}`,
      },
      {
        header: `${t('Lorem, ipsum dolor.')}`,
        description: `${t(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, incidunt eum sint maiores necessitatibus dolores laudantium quasi quas minus amet.'
        )}`,
      },
    ];

    return slides.map((item, key) => (
      <div key={key} className={styles.slideContainer}>
        <h1>{item.header}</h1>
        <p>{item.description}</p>
      </div>
    ));
  };
  render() {
    return (
      <section className={`mainPageSlider ${styles.mainPageWrapper}`}>
        <Socials />
        <div className={styles.slider}>
          <AliceCarousel
            items={this.sliderItems()}
            mouseDragEnabled={false}
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
            buttonsDisabled
            ref={el => (this.Carousel = el)}
          />
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
)(withTranslation('translations')(MainPage));
