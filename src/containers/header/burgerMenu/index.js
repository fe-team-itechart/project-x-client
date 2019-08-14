import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
// conect after setting router and change links,
// import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

class Burger extends Component {
  state = {
    isActive: false,
  };

  burgerHandle = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const { isActive } = this.state;
    return (
      <>
        <div
          className={isActive ? styles.burger_active : styles.burger}
          onClick={this.burgerHandle}
        />
        {this.state.isActive ? (
          <>
            <div className={styles.clickOutside} onClick={this.burgerHandle} />
            <div
              className={styles.menu}
              wrappedRef={instance => {
                this.burgerHandle = instance.burgerHandle;
              }}>
              <a className={styles.menu_item} href="/">
                Sourses
              </a>
              <a className={styles.menu_item} href="/">
                Categories
              </a>
              <div className={styles.button}>Log in</div>
              <div className={styles.button}>Register</div>
              <div className={styles.search}>
                <input type="text" placeholder="search" />
                <MdSearch className={styles.icon} />
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

export default Burger;
