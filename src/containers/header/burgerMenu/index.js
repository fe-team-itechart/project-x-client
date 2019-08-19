import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import styles from './styles.module.scss';

class Burger extends Component {
  state = {
    menuIsActive: false,
  };

  burgerHandle = () => {
    this.setState(state => ({ menuIsActive: !state.menuIsActive }));
  };

  render() {
    const { menuIsActive } = this.state;
    const { log, reg } = this.props;
    return (
      <>
        <div
          className={menuIsActive ? styles.burger_active : styles.burger}
          onClick={this.burgerHandle}
        />
        {menuIsActive ? (
          <>
            <div className={styles.click_outside} onClick={this.burgerHandle} />
            <div className={styles.menu}>
              <a className={styles.menu_item} href="/">
                Sourses
              </a>
              <a className={styles.menu_item} href="/">
                Categories
              </a>
              <div
                className={styles.button}
                onClick={() => {
                  log();
                  this.burgerHandle();
                }}>
                Log in
              </div>
              <div
                className={styles.button}
                onClick={() => {
                  reg();
                  this.burgerHandle();
                }}>
                Register
              </div>
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
