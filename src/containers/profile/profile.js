import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const Profile = props => {
  const currentTab = window.location.pathname;

  const tabs = {
    public: '/profile-public',
    account: '/profile-account',
  };

  return (
    <div className={styles.navWrapper}>
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
        </ul>
      </nav>
    </div>
  );
};

export default withTranslation('translations')(Profile);
