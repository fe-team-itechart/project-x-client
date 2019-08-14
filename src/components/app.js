import React from 'react';
import Profile from '../containers/profile/profile.jsx';

import { Footer } from './footer/index';
import styles from './styles.module.scss';

export const App = () => {
  return (
    <div className={styles.page}>
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
