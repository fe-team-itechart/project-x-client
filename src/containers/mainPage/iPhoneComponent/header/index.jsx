import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logOutRequest } from '../../../../actions/auth';
import Burger from './burgerMenu';
import Login from '../../../auth/login';
import Register from '../../../auth/register';

import styles from './styles.module.scss';

const Header = props => {
  const [isOpenLog, setModalStatusLog] = useState(false);
  const [isOpenReg, setModalStatusReg] = useState(false);


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
      <Burger
        login={openModalLog}
        register={openModalReg}
        logout={logOutRequest}
        isAuth={isAuthenticated}
      />
      <Login modalStatus={isOpenLog} onModalClose={closeLoginModal} />
      <Register modalStatus={isOpenReg} onModalClose={closeRegModal} />
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = { logOutRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
