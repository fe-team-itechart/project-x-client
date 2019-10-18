import React from 'react';

import styles from './styles.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} />
    </div>
  );
};
