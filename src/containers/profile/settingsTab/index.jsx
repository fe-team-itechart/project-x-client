import React from 'react'
import styles from './styles.module.scss';

export const SettingsTab = () => {
  const {
    settings,
    styled_checkbox,
    localization,
  } = styles;
  return (
    <section className={settings}>
      <section className={localization}>
        <select name="localization" id="">
          <option value="" defaultValue>ENG</option>
          <option value="" >RUS</option>
        </select>
      </section>
      <button>
        Teacher request
      </button>
      <ul>
        <li>
          <input className={styled_checkbox} id="styled-checkbox-1" type="checkbox" value="value1" />
          <label htmlFor="styled-checkbox-1">Checkbox 1</label>
        </li>
        <li>
          <input className={styled_checkbox} id="styled-checkbox-2" type="checkbox" value="value1" />
          <label htmlFor="styled-checkbox-2">Checkbox 2</label>
        </li>
      </ul>
      <button>
        save
      </button>
    </section>
  )
}
