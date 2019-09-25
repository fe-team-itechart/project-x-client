import React from 'react';

import { FaVk, FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { links } from '../../utils/constants';

import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="src\assets\logoLight.png" alt="" />
        <p>We are remarkable</p>
        <p>© 2019 :iTechArt All Rights Reserved.</p>
      </div>
      <div className={styles.socialMediaContainer}>
        <h2>Follow us on</h2>
        <ul>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={links.iTechVK}>
              <span className={styles.socialMedia}>
                <FaVk />
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={links.iTechYoutube}>
              <span className={styles.socialMedia}>
                <FaYoutube />
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={links.iTechFacebook}>
              <span className={styles.socialMedia}>
                <FaFacebookSquare />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
