import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
// conect after setting router and change links,
// import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

class Burger extends Component {
  state = {
    isActive: false,
  };

  render() {
    const burgerHandle = () => {
      this.setState(state => ({ isActive: !state.isActive }));
    };
    return (
      <>
        <div
          className={this.state.isActive ? styles.burger_active : styles.burger}
          onClick={burgerHandle}
        />
        {this.state.isActive ? (
          <>
            <div className={styles.clickOutside} onClick={burgerHandle} />
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
