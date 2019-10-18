import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaWindowClose } from 'react-icons/fa';
import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';
import './menu.scss';

const Profile = props => {
  const currentTab = window.location.pathname;
  let toggleMenu = null;

  const tabs = {
    public: '/profile-public',
    courses: '/profile-courses',
    account: '/profile-account',
    settings: '/profile-settings',
  };

  useEffect(() => {
    toggleMenu = document.querySelector('#toggleMenu');
  });

  const toggleMenuFunc = () => {
    toggleMenu.classList.toggle('menuIsOpen');
  };

  return (
    <>
      <div className={styles.mobileBurger}>
        <button type="button" onClick={toggleMenuFunc}>
          <div className={styles.photo} />
          <div className={styles.name}>{`${props.t('John Doe')}`}</div>
          <div className={styles.role}>{`${props.t('student')}`}</div>
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
                {`${props.t('Public')}`}
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
                {`${props.t('Courses')}`}
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
                {`${props.t('Account')}`}
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
                {`${props.t('Settings')}`}
              </button>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.closeButton}
              onClick={toggleMenuFunc}>
              <FaWindowClose />
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.menu}>
        <div className={styles.user}>
          <div className={styles.photo} />
          <div className={styles.name}>{`${props.t('John Doe')}`}</div>
          <div className={styles.role}>{`${props.t('student')}`}</div>
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
                  {`${props.t('Profile')}`}
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
                  {`${props.t('Courses')}`}
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
                  {`${props.t('Account')}`}
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
                  {`${props.t('Settings')}`}
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default withTranslation('translations')(Profile);
