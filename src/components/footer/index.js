import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const Footer = props => {
  const { t: translate } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <span>DP</span>
        <p>{`${props.t('Copyright (c) DasPish Corporate')}`}</p>
      </div>
      <div className={styles.termsWrapper}>
        <Link to="/">{`${translate('Terms')}`}</Link>
        <Link to="/">{`${translate('Privacy Policy and Cookie Policy')}`}</Link>
      </div>
    </footer>
  );
};

export default withTranslation('translations')(Footer);