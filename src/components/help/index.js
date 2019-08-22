import React from 'react';
import { Link } from 'react-router-dom';

import { FaUser, FaCogs, FaClipboardList, FaBook } from 'react-icons/fa';

import styles from './styles.module.scss';

export const Help = () => {
  return (
    <section className={styles.cards_wrapper}>
      <h2>Help</h2>
      <Link to="/getting-started" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaClipboardList />
          <h3>Getting Started</h3>
          <p>Learn how our courses works and how to start learning</p>
        </div>
      </Link>

      <Link to="/profile" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaUser />
          <h3>Account/Profile</h3>
          <p>Manage your account settings</p>
        </div>
      </Link>

      <Link to="/troubleshooting" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaCogs />
          <h3>Troubleshooting</h3>
          <p>Experiencing a bug? Check here</p>
        </div>
      </Link>

      <Link to="/course-taking" className={styles.card_link}>
        <div className={styles.card_wrapper}>
          <FaBook />
          <h3>Course Taking</h3>
          <p>Everything about taking our course</p>
        </div>
      </Link>
    </section>
  );
};
