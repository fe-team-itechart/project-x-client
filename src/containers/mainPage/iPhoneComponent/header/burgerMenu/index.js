import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
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
          className={menuIsActive ? styles.burgerActive : styles.burger}
          onClick={this.burgerHandle}
        />
        {menuIsActive && (
          <>
            <div className={styles.clickOutside} onClick={this.burgerHandle} />
            <div className={styles.menu}>
              <NavLink className={styles.menuItem} to="/sources">
                Sources
              </NavLink>
              <NavLink className={styles.menuItem} to="/categories">
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
              <div className={styles.search}>
                <input type="text" placeholder="search" />
                <MdSearch className={styles.icon} />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

Burger.propTypes = {
  register: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

export default Burger;
