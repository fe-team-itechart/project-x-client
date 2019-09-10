import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const ProfilePhoto = () => {
  const [menus, setMenu] = useState({ marginLeft: '-105%' });

  const {
    mobile_burger,
    mobile_menu,
    photo,
    name,
    role,
    close_button,
  } = styles;

  const toggleMenu = () => {
    if (menus.marginLeft === '15px') {
      setMenu({ marginLeft: '-105%' });
    } else {
      setMenu({ marginLeft: '15px' });
    }
  };

  return (
    <>
      <div className={mobile_burger}>
        <button type="button" onClick={() => toggleMenu()}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </button>
      </div>
      <nav className={mobile_menu} style={menus}>
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
              className={close_button}
              onClick={() => setMenu({ marginLeft: '-105%' })}>
              <FaWindowClose />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
