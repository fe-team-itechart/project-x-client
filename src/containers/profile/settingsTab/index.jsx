import React from 'react'
import styles from './styles.module.scss';

import { Profile } from '../profile';

export const SettingsTab = () => {
  const {
    settings,
    styled_checkbox,
    localization,
  } = styles;

  return (
    <>
      <Profile />
      <div className={settings}>
        <div className={localization}>
          <select name="localization" id="">
            <option value="" defaultValue>ENG</option>
            <option value="" >RUS</option>
          </select>
        </div>
        <button type='button'>
          Teacher request
        </button>
        <ul>
          <li>
            <input className={styled_checkbox} id="styled-checkbox-1" type="checkbox" />
            <label htmlFor="styled-checkbox-1">Checkbox 1</label>
          </li>
          <li>
            <input className={styled_checkbox} id="styled-checkbox-2" type="checkbox" />
            <label htmlFor="styled-checkbox-2">Checkbox 2</label>
          </li>
        </ul>
        <button type='button'>
          save
        </button>
      </div>
    </>
  )
}
