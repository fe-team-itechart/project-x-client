import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaWindowClose } from 'react-icons/fa';

import styles from './styles.module.scss';
import './menu.scss';

export const Profile = () => {
  const currentTab = window.location.pathname;

  const tabs = {
    public: '/profile-public',
    courses: '/profile-courses',
    account: '/profile-account',
    settings: '/profile-settings',
  };

  useEffect(() => {
    const toggleMenu = document.querySelector('#toggleMenu');
  });

  const toggleMenu = () => {
    toggleMenu.classList.toggle('menuIsOpen');
  };

  return (
    <>
      <h3 className={styles.hiddenText}>
        Profile's page which include courses, settings, public profile, users's
        account
      </h3>
      <div className={styles.mobileBurger}>
        <button type="button" onClick={toggleMenu}>
          <div className={styles.photo} />
          <div className={styles.name}>John Doe</div>
          <div className={styles.role}>student</div>
        </button>
      </div>
      <nav id="toggleMenu" className={styles.mobileMenu}>
        <ul>
          <li>
            <Link to="/profile-public">
              <button
                type="button"
                className={`${styles.button} ${
                  currentTab === tabs.public ? styles.activeButton : ''
                }`}>
                Public
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-courses">
              <button
                type="button"
                className={`${styles.button} ${
                  currentTab === tabs.courses ? styles.activeButton : ''
                }`}>
                Courses
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-account">
              <button
                type="button"
                className={`${styles.button} ${
                  currentTab === tabs.account ? styles.activeButton : ''
                }`}>
                Account
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile-settings">
              <button
                type="button"
                className={`${styles.button} ${
                  currentTab === tabs.settings ? styles.activeButton : ''
                }`}>
                Settings
              </button>
            </Link>
          </li>
          <li>
            <button type="button" className={styles.closeButton} onClick={toggleMenu}>
              <FaWindowClose />
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.menu}>
        <div className={styles.user}>
          <div className={styles.photo} />
          <div className={styles.name}>John Doe</div>
          <div className={styles.role}>student</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/profile-public">
                <button
                  type="button"
                  className={`${styles.button} ${
                    currentTab === tabs.public ? styles.activeButton : ''
                  }`}>
                  Profile
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile-courses">
                <button
                  type="button"
                  className={`${styles.button} ${
                    currentTab === tabs.courses ? styles.activeButton : ''
                  }`}>
                  Courses
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile-account">
                <button
                  type="button"
                  className={`${styles.button} ${
                    currentTab === tabs.account ? styles.activeButton : ''
                  }`}>
                  Account
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile-settings">
                <button
                  type="button"
                  className={`${styles.button} ${
                    currentTab === tabs.settings ? styles.activeButton : ''
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
