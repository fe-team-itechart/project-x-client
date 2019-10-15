import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <span>DP</span>
        <p>Copyright (c) DasPish Corporate</p>
      </div>
      <div className={styles.termsWrapper}>
        <Link to="/">Terms</Link>
        <Link to="/">Privacy Policy and Cookie Policy</Link>
      </div>
    </footer>
  );
};
