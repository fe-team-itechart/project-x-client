import React from 'react';

import { withTranslation } from 'react-i18next';

import Profile from '../profile';

import styles from './styles.module.scss';

const Settings = props => {
  const { t: translate } = props;
  
  return (
    <>
      <Profile />
      <div className={styles.settings}>
        <div className={styles.localization}>
          <select name="localization" id="">
            <option value="" defaultValue>
              ENG
            </option>
            <option value="">RUS</option>
          </select>
        </div>

        <button type="button">{translate('Teacher request')}</button>

        <ul>
          <li>
            <input
              className={styles.styledCheckbox}
              id="styled-checkbox-1"
              type="checkbox"
            />
            <label htmlFor="styled-checkbox-1">{translate('Checkbox 1')}</label>
          </li>

          <li>
            <input
              className={styles.styledCheckbox}
              id="styled-checkbox-2"
              type="checkbox"
            />
            <label htmlFor="styled-checkbox-2">{translate('Checkbox 2')}</label>
          </li>
        </ul>
        <button type="button">{translate('Save')}</button>
      </div>
    </>
  );
};

export default withTranslation('translations')(Settings);
