import React, { PureComponent } from 'react';

import styles from './styles.module.scss';

class Spinner extends PureComponent {
  render() {
    return (
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
}

export default Spinner;
