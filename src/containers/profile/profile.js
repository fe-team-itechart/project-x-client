import React, { useEffect } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import './menu.scss';

export const Profile = () => {

  const {
    mobile_burger,
    mobile_menu,
    user,
    photo,
    name,
    role,
    close_button,
    menu,
    hidden_text,
    button,
    active_button,
  } = styles;

  const currentTab = window.location.pathname;
  
  const tabs = {
    public: '/profile-public',
    courses: '/profile-courses',
    account: '/profile-account',
    settings: '/profile-settings',
  };

  useEffect(() => {
    const toggle_menu = document.querySelector('#toggle_menu');
  })

  const toggleMenu = () => {
    toggle_menu.classList.toggle('menu_is_open');
  };

  return (
    <>
      <h3 className={hidden_text}>
        Profile's page which include courses, settings, public profile, users's
        account
      </h3>
      <div className={mobile_burger}>
        <button type="button" onClick={toggleMenu}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </button>
      </div>
      <nav id='toggle_menu' className={mobile_menu}>
        <ul>
          <li>
            <Link to="/profile-public">
              <button
                type="button"
                className={`${button} ${
                  currentTab === tabs.public ? active_button : ''
                }`}>
                Public
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-courses">
              <button
                type="button"
                className={`${button} ${
                  currentTab === tabs.courses ? active_button : ''
                }`}>
                Courses
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-account">
              <button
                type="button"
                className={`${button} ${
                  currentTab === tabs.account ? active_button : ''
                }`}>
                Account
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-settings">
              <button
                type="button"
                className={`${button} ${
                  currentTab === tabs.settings ? active_button : ''
                }`}>
                Settings
              </button>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={close_button}
              onClick={toggleMenu}>
              <FaWindowClose />
            </button>
          </li>
        </ul>
      </nav>

      <div className={menu}>
        <div className={user}>
          <div className={photo} />
          <div className={name}>John Doe</div>
          <div className={role}>student</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/profile-public">
                <button
                  type="button"
                  className={`${button} ${
                    currentTab === tabs.public ? active_button : ''
                  }`}>
                  Profile
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile-courses">
                <button
                  type="button"
                  className={`${button} ${
                    currentTab === tabs.courses ? active_button : ''
                  }`}>
                  Courses
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile-account">
                <button
                  type="button"
                  className={`${button} ${
                    currentTab === tabs.account ? active_button : ''
                  }`}>
                  Account
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile-settings">
                <button
                  type="button"
                  className={`${button} ${
                    currentTab === tabs.settings ? active_button : ''
                  }`}>
                  Settings
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
