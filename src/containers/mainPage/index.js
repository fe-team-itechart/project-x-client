import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FaLaptopCode, FaCode, FaAngleDoubleDown } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { ProfileIphone } from './iPhoneComponent';

import styles from './styles.module.scss';

class MainPage extends Component {
  state = {
    activeTab: 0,
  };

  tabsHandler = tabsNum => {
    this.setState({ activeTab: tabsNum });
  };

  render() {
    const {
      left_block,
      text_header,
      pagination_block,
      tabs,
      tab_context,
      buttons_block,
      button,
      right_block,
      pc_block,
      phone_block,
      main_page_wrapper,
      arrow_down,
      main_block,
      phone_context,
      pc_context
    } = styles;
    return (
      <main className={main_page_wrapper}>
        <div className={main_block}>
          <div className={left_block}>
            <div className={text_header}>
              <h1>
                Hi, it's <b>Tech</b>courses
              </h1>
              <p>description</p>
            </div>
            <div className={pagination_block}>
              <div className={tabs}>
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
                <div className={tab_context}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic 1
                </div>
              )}
              {this.state.activeTab === 1 && (
                <div className={tab_context}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic 2
                </div>
              )}
              {this.state.activeTab === 2 && (
                <div className={tab_context}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic 3
                </div>
              )}
            </div>
            <div className={buttons_block}>
              <div className={button}>Start now</div>
            </div>
          </div>
          <div className={right_block}>
            <div className={pc_block} style={{backgroundImage:'url(src/assets/Laptop.png)'}}>
              <div className={pc_context}>
                <img src="\src\assets\laptopScreen.png" alt="Laptop"/>
              </div>
            </div>
            <div className={phone_block} style={{backgroundImage:'url(src/assets/iPhone.png)'}}>
              <img src="src\assets\iPhoneLeft.png" alt="iPhone" />
              <div className={phone_context}>
                <ProfileIphone />
              </div>
            </div>
          </div>
        </div>
        <div className={arrow_down}> 
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
