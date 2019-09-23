import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { logOutRequest } from '../../actions/auth';
import Burger from './burgerMenu';
import Login from '../auth/login';
import Register from '../auth/register';
import ForgotPassword from '../auth/forgotPassword';

import styles from './styles.module.scss';

const Header = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenLog, setModalStatusLog] = useState(false);
  const [isOpenReg, setModalStatusReg] = useState(false);
  const [isOpenForgotPass, setModalForgotPass] = useState(false);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
  }, []);

  const closeLoginModal = () => {
    setModalStatusLog(false);
  };
  const closeRegModal = () => {
    setModalStatusReg(false);
  };

  const openModalLog = () => {
    setModalStatusLog(true);
  };

  const openModalReg = () => {
    setModalStatusReg(true);
  };

  const { isAuthenticated, logOutRequest } = props;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="src\assets\logoLight.png" alt="Logo" />
        </NavLink>
      </div>
      {width > 768 ? (
        <>
          <div className={styles.search}>
            <input type="text" placeholder="search" />
            <MdSearch className={styles.icon} />
          </div>
          <div className={styles.menu}>
            <NavLink to="/sources" className={styles.link}>
              Sources
            </NavLink>
            <NavLink to="/categories" className={styles.link}>
              Categories
            </NavLink>

            {isAuthenticated ? (
              <button
                type="button"
                className={styles.button}
                onClick={logOutRequest}>
                Log out
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className={styles.button}
                  onClick={openModalLog}>
                  Log in
                </button>
                <button
                  type="button"
                  className={styles.button}
                  onClick={openModalReg}>
                  Register
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        <Burger
          login={openModalLog}
          register={openModalReg}
          logout={logOutRequest}
          isAuth={isAuthenticated}
        />
      )}
      <Login 
        modalStatus={isOpenLog} 
        onModalClose={closeLoginModal}
        modalStatusForgotPass={isOpenForgotPass}
        onModalCloseForgotPass={setModalForgotPass}
      />
      <Register modalStatus={isOpenReg} onModalClose={closeRegModal} />
      <ForgotPassword modalStatus={isOpenForgotPass} onModalClose={setModalForgotPass}/>
    </header>
  );
};

Header.propTypes = {
  logOutRequest: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = { logOutRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
