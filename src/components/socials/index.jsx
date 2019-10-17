import React, { useState } from 'react';

import styles from './styles.module.scss';
import {
  FaChevronLeft,
  FaVk,
  FaYoutube,
  FaFacebookSquare,
} from 'react-icons/fa';

const Socials = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.socialsWrapper}>
      <div
        className={isOpen ? `${styles.arrow} ${styles.active}` : styles.arrow}
        onClick={() => setOpen(!isOpen)}>
        <FaChevronLeft />
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
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vk.com/itechart.group">
              <FaVk />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/iTechArt.Group">
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Socials;
