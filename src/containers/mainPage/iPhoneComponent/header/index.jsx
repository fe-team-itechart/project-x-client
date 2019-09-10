import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Burger from './burgerMenu';
import styles from './styles.module.scss';
import Login from '../../../auth/login';
import Register from '../../../auth/register';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpenLog, setModalStatusLog] = useState(false);
  const [isOpenReg, setModalStatusReg] = useState(false);

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

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="src\assets\logoLight.png" alt="Logo" />
        </NavLink>
      </div>
      <Burger log={() => openModalLog()} reg={() => openModalReg()} />
      <Login modalStatus={isOpenLog} onModalClose={closeLoginModal} />
      <Register modalStatus={isOpenReg} onModalClose={closeRegModal} />
    </header>
  );
};

export default Header;
