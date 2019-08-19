import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import Burger from './burgerMenu';
import styles from './styles.module.scss';
import Login from '../auth/login';
import Register from '../auth/register';

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
        <Link to="/">
          <img src="src\assets\logoLight.png" alt="Logo" />
        </Link>
      </div>
      {width > 768 ? (
        <>
          <div className={styles.search}>
            <input type="text" placeholder="search" />
            <MdSearch className={styles.icon} />
          </div>
          <div className={styles.menu}>
            <li className={styles.link}>Sources</li>
            <li className={styles.link}>Categories</li>
            <div className={styles.button} onClick={() => openModalLog()}>
              Log in
            </div>
            <div className={styles.button} onClick={() => openModalReg()}>
              Register
            </div>
          </div>
          <Login modalStatus={isOpenLog} onModalClose={closeLoginModal} />
          <Register modalStatus={isOpenReg} onModalClose={closeRegModal} />
        </>
      ) : (
        <Burger />
      )}
    </header>
  );
};

export default Header;
