import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import styles from './styles.module.scss';

export const ProfileInputs = () => {
  const [update, setUpdate] = useState(true);

  const updateProfile = () => {
    setUpdate(!update);
  }

  return (
      <div className={styles.profile}>
        <div className={styles.userFio}>
          <input
            type="text"
            placeholder="First name"
            disabled={update}
            defaultValue="John"
          />
          <input
            type="text"
            placeholder="Last name"
            disabled={update}
            defaultValue="Doe"
          />
        </div>
        <div className={styles.description}>
          <input type="text" placeholder="Description" disabled={update} />
        </div>
        <div className={styles.social}>
          <div>
            <span>
              <FaTwitter className={styles.twitterIcon} />
            </span>
            <input
              type="text"
              placeholder="twitter nick"
              disabled={update}
              defaultValue="johntwitt"
            />
          </div>
          <div>
            <span>
              <FaFacebookF className={styles.facebookIcon} />
            </span>
            <input
              type="text"
              placeholder="facebook nick"
              disabled={update}
              defaultValue="jhondoe"
            />
          </div>
          <div>
            <span>
              <FaLinkedinIn className={styles.linkedinIcon} />
            </span>
            <input type="text" placeholder="linkedin nick" disabled={update} />
          </div>
        </div>
        {update ? (
          <button type="button" onClick={updateProfile}>
            Update
          </button>
        ) : (
          <>
            <button type="button" onClick={updateProfile}>
              Save
            </button>
            <button type="button" onClick={updateProfile}>
              Close
            </button>
          </>
        )}
      </div>
  );
};
