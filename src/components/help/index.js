import React from 'react';
import { Link } from 'react-router-dom';

import { FaUser, FaCogs, FaClipboardList, FaBook } from 'react-icons/fa';
import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const Help = props => {
  const { t: translate } = props;

  return (
    <section className={styles.cardsWrapper}>
      <h2>Help</h2>
      <Link to="/getting-started" className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <FaClipboardList />
          <h3>{`${translate('Getting Started')}`}</h3>
          <p>{`${translate(
            'Learn how our courses works and how to start learning'
          )}`}</p>
        </div>
      </Link>

      <Link to="/troubleshooting" className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <FaCogs />
          <h3>{`${translate('Troubleshooting')}`}</h3>
          <p>{`${translate('Experiencing a bug? Check here')}`}</p>
        </div>
      </Link>

      <Link to="/course-taking" className={styles.cardLink}>
        <div className={styles.cardWrapper}>
          <FaBook />
          <h3>{`${translate('Course Taking')}`}</h3>
          <p>{`${translate('Everything about taking our course')}`}</p>
        </div>
      </Link>
    </section>
  );
};

export default withTranslation('translations')(Help);
