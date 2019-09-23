import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const ProfilePhoto = () => {
  const [menu, setMenu] = useState('-105%');

  const toggleMenu = () => {
    if (menu === '15px') {
      setMenu('-105%' );
    } else {
      setMenu('15px' );
    }
  };

  return (
    <>
      <div className={styles.mobileBurger}>
        <button type="button" onClick={() => toggleMenu()}>
          <div className={styles.photo} />
          <div className={styles.name}>John Doe</div>
          <div className={styles.role}>student</div>
        </button>
      </div>
      <nav className={styles.mobileMenu} style={{ marginLeft: menu}}>
        <ul>
          <li>
            <Link to="/profile/public">
              <button type="button">Public</button>
            </Link>
          </li>
          <li>
            <Link to="/profile/courses">
              <button type="button">Courses</button>
            </Link>
          </li>
          <li>
            <Link to="/profile/account">
              <button type="button">Account</button>
            </Link>
          </li>
          <li>
            <Link to="/profile/settings">
              <button type="button">Settings</button>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setMenu('-105%' )}>
              <FaWindowClose />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
