import React from 'react';
import { Link } from 'react-router-dom';

import { FaUser, FaCogs, FaClipboardList, FaBook } from 'react-icons/fa';

import styles from './styles.module.scss';

export const Help = () => {
  return (
    <section className={styles.cardsWrapper}>
      <h2>Help</h2>
      <Link to="/getting-started" className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <FaClipboardList />
          <h3>Getting Started</h3>
          <p>Learn how our courses works and how to start learning</p>
        </div>
      </Link>

      <Link to="/troubleshooting" className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <FaCogs />
          <h3>Troubleshooting</h3>
          <p>Experiencing a bug? Check here</p>
        </div>
      </Link>

      <Link to="/course-taking" className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <FaBook />
          <h3>Course Taking</h3>
          <p>Everything about taking our course</p>
        </div>
      </Link>
    </section>
  );
};
