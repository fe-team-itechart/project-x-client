import React from 'react';

import { Footer as DefaultFooter } from '../../../../components/footer';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <DefaultFooter />
    </div>
  )
}

