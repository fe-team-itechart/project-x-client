import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import styles from './styles.module.scss';

class Burger extends Component {
  state = {
    menuIsActive: false,
  };

  burgerHandle = () => {
    this.setState(state => ({ menuIsActive: !state.menuIsActive }));
  };

  register = () => {
    this.props.register();
    this.burgerHandle();
  };

  login = () => {
    this.props.login();
    this.burgerHandle();
  };

  logout = () => {
    this.props.logout();
    this.burgerHandle();
  };

  render() {
    const { menuIsActive } = this.state;
    const { isAuth } = this.props;
    return (
      <>
        <div
          className={menuIsActive ? styles.burger_active : styles.burger}
          onClick={this.burgerHandle}
        />
        {menuIsActive && (
          <>
            <div className={styles.click_outside} onClick={this.burgerHandle} />
            <div className={styles.menu}>
              <NavLink className={styles.menu_item} to="/sources">
                Sources
              </NavLink>
              <NavLink className={styles.menu_item} to="/categories">
                Categories
              </NavLink>
              {isAuth ? (
                <button
                  type="button"
                  className={styles.button}
                  onClick={this.logout}>
                  Logout
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={this.login}>
                    Log in
                  </button>
                  <button
                    type="button"
                    className={styles.button}
                    onClick={this.register}>
                    Register
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

export default Burger;
