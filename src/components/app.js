import React from 'react';

import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Footer />
    </div>
  );
};
