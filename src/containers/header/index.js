import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { FaBars, FaWindowClose } from 'react-icons/fa';

import { logOutRequest } from '../../actions/auth';
import Login from '../auth/login';
import Register from '../auth/register';
import ForgotPassword from '../auth/forgotPassword';

import styles from './styles.module.scss';
import './menu.scss';

const Header = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenLog, setModalStatusLog] = useState(false);
  const [isOpenReg, setModalStatusReg] = useState(false);
  const [isOpenMenu, setMenuStatus] = useState(false);
  const [isOpenForgotPass, setModalForgotPass] = useState(false);

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
  }, []);

  useEffect(() => {
    if (width > 768) {
      const toggleElement = document.querySelector('#menu');
      toggleElement.classList.remove('mobileMenuActive');
      setMenuStatus(false);
    }
  });

  const toggleMenuFunc = () => {
    if (width <= 768) {
      const toggleElement = document.querySelector('#menu');
      toggleElement.classList.toggle('mobileMenuActive');
    }
  };

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

  const checkMobileMenuStatus = () => {
    toggleMenuFunc();
    setMenuStatus(!isOpenMenu);
  };

  const { isAuthenticated, logOutRequest } = props;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="src\assets\logoLight.png" alt="Logo" />
        </NavLink>
      </div>
      <>
        <div className={styles.search}>
          <input type="text" placeholder="search" />
          <MdSearch className={styles.icon} />
        </div>
        {width < 768 && (
          <div className={styles.menuIcons} onClick={checkMobileMenuStatus}>
            {!isOpenMenu ? <FaBars /> : <FaWindowClose />}
          </div>
        )}
        <div id="menu" className={styles.menu}>
          <div onClick={checkMobileMenuStatus}>
            <NavLink to="/sources" className={styles.link}>
              Sources
            </NavLink>
          </div>
          <div onClick={checkMobileMenuStatus}>
            <NavLink to="/categories" className={styles.link}>
              Categories
            </NavLink>
          </div>

          {isAuthenticated ? (
            <div className={styles.buttonsBlock}>
              <button
                type="button"
                className={styles.button}
                onClick={logOutRequest}>
                Log out
              </button>
            </div>
          ) : (
            <div className={styles.buttonsBlock}>
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
            </div>
          )}
        </div>
      </>
      <Login
        modalStatus={isOpenLog}
        onModalClose={closeLoginModal}
        modalStatusForgotPass={isOpenForgotPass}
        onModalCloseForgotPass={setModalForgotPass}
      />
      <Register modalStatus={isOpenReg} onModalClose={closeRegModal} />
      <ForgotPassword
        modalStatus={isOpenForgotPass}
        onModalClose={setModalForgotPass}
      />
      {width < 768 && isOpenMenu && <div className={styles.outSideMenuClick} onClick={checkMobileMenuStatus}/>}
    </header>
  );
};

Header.propTypes = {
  logOutRequest: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = { logOutRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
