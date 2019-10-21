import React, { useState } from 'react';

import {
  IoIosMail,
  IoLogoVk,
  IoLogoYoutube,
  IoLogoFacebook,
  IoIosCellular,
} from 'react-icons/io';

import styles from './styles.module.scss';

const Socials = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.socialsWrapper}>
      <div
        className={isOpen ? `${styles.arrow} ${styles.active}` : styles.arrow}
        onClick={() => setOpen(!isOpen)}>
        <IoIosCellular />
      </div>
      <div
        className={
          isOpen ? `${styles.socials} ${styles.active}` : styles.socials
        }>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/user/iTechArt">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vk.com/itechart.group">
              <IoLogoVk />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/iTechArt.Group">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:careers@itechart-group.com">
              <IoIosMail />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Socials;
