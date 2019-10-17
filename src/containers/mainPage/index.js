import React, { Component } from 'react';
import { connect } from 'react-redux';

import Socials from '../../components/socials';

import { FaLaptopCode, FaCode, FaAngleDoubleDown } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { ProfileIphone } from './iPhoneComponent';

import laptop from '../../../public/assets/laptop.png';
import laptopScreen from '../../../public/assets/laptopScreen.png';
import iPhone from '../../../public/assets/iPhone.png';
import iPhoneLeft from '../../../public/assets/iPhoneLeft.png';

import styles from './styles.module.scss';

class MainPage extends Component {
  state = {
    activeTab: 0,
  };

  tabsHandler = tabsNum => {
    this.setState({ activeTab: tabsNum });
  };

  render() {
    return (
      <main className={styles.mainPageWrapper}>
        <Socials />
        <div className={styles.mainBlock}>
          <div className={styles.leftBlock}>
            <div className={styles.textHeader}>
              <h1>
                <b>Tech</b>courses
              </h1>
              <p>description</p>
            </div>
            <div className={styles.paginationBlock}>
              <div className={styles.tabs}>
                <ul>
                  <li
                    className={this.state.activeTab === 0 ? styles.active : ''}
                    onClick={() => this.tabsHandler(0)}>
                    <FaCode />
                  </li>
                  <li
                    className={this.state.activeTab === 1 ? styles.active : ''}
                    onClick={() => this.tabsHandler(1)}>
                    <IoIosRocket />
                  </li>
                  <li
                    className={this.state.activeTab === 2 ? styles.active : ''}
                    onClick={() => this.tabsHandler(2)}>
                    <FaLaptopCode />
                  </li>
                </ul>
              </div>
              {this.state.activeTab === 0 && (
                <div className={styles.tabContext}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic 1
                </div>
              )}
              {this.state.activeTab === 1 && (
                <div className={styles.tabContext}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic 2
                </div>
              )}
              {this.state.activeTab === 2 && (
                <div className={styles.tabContext}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic 3
                </div>
              )}
            </div>
            <div className={styles.buttonsBlock}>
              <div className={styles.button}>Start now</div>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div
              className={styles.pcBlock}
              style={{ backgroundImage: `url(${laptop})` }}>
              <div className={styles.pcContext}>
                <img src={laptopScreen} alt="Laptop" />
              </div>
            </div>
            <div
              className={styles.phoneBlock}
              style={{ backgroundImage: `url(${iPhone})` }}>
              <img src={iPhoneLeft} alt="iPhone" />
              <div className={styles.phoneContext}>
                <ProfileIphone />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowDown}>
          <FaAngleDoubleDown />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
