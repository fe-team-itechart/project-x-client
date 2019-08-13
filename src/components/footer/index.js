import React from 'react';

import { FaVk, FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="src\assets\logoLight.png" alt="" />
        <p>Description</p>
        <p>© 2019 :iTechArt All Rights Reserved.</p>
      </div>
      <div className={styles.social_media_container}>
        <h2>Follow us on</h2>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vk.com/itechart.group">
            <span className={styles.social_media}>
              <FaVk />
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/user/iTechArt">
            <span className={styles.social_media}>
              <FaYoutube />
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/iTechArt.Group/">
            <span className={styles.social_media}>
              <FaFacebookSquare />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
