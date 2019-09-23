import React, { useState } from 'react';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import styles from './styles.module.scss';

export const ProfileInputs = () => {
  const [update, setUpdate] = useState(true);
  const {
    profile,
    user_fio,
    description,
    social,
    twitter_icon,
    facebook_icon,
    linkedin_icon,
  } = styles;

  const updateProfile = () => {
    setUpdate(!update);
  }

  return (
      <div className={profile}>
        <div className={user_fio}>
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
        <div className={description}>
          <input type="text" placeholder="Description" disabled={update} />
        </div>
        <div className={social}>
          <div>
            <span>
              <FaTwitter className={twitter_icon} />
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
              <FaFacebookF className={facebook_icon} />
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
              <FaLinkedinIn className={linkedin_icon} />
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
