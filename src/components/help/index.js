import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaCogs,
  FaWallet,
  FaClipboardList,
  FaBook,
} from 'react-icons/fa';

import styles from './styles.module.scss';

export const Help = () => {
  return (
    <section className={styles.cards_wrapper}>
      <a href="#" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaClipboardList />
          <h2>Getting Started</h2>
          <p>Learn how our courses works and how to start learning</p>
        </div>
      </a>

      <a href="#" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaUser />
          <h2>Account/Profile</h2>
          <p>Manage your account settings</p>
        </div>
      </a>

      <a href="#" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaCogs />
          <h2>Troubleshooting</h2>
          <p>Experiencing a bug? Check here</p>
        </div>
      </a>

      <a href="#" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaBook />
          <h2>Course Taking</h2>
          <p>Everything about taking our course</p>
        </div>
      </a>

      <a href="#" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaWallet />
          <h2>Purchase/Refunds</h2>
          <p>Learn about coupons, how to send gifts, and refunds.</p>
        </div>
      </a>
    </section>
  );
};
