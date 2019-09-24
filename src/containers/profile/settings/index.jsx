import React from 'react'

import { Profile } from '../profile';

import styles from './styles.module.scss';

export const Settings = () => {

  return (
    <>
      <Profile />
      <div className={styles.settings}>
        <div className={styles.localization}>
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
            <input className={styles.styledCheckbox} id="styled-checkbox-1" type="checkbox" />
            <label htmlFor="styled-checkbox-1">Checkbox 1</label>
          </li>
          <li>
            <input className={styles.styledCheckbox} id="styled-checkbox-2" type="checkbox" />
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
