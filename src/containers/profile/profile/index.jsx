import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { isEmpty } from 'lodash';
import { withTranslation } from 'react-i18next';

import { publicProfileValidate } from '../../../validation/profile';
import {
  getProfileRequest,
  updateProfileRequest,
} from '../../../actions/profile';
import { links } from '../../../utils/constants';
import { Spinner } from '../../../components/spinner';

import styles from './styles.module.scss';

const ProfileData = ({
  profile,
  getProfileRequest,
  updateProfileRequest,
  isProfileLoading,
  t,
}) => {
  const [formData, setFormData] = useState({
    userName: '',
    description: '',
    twitterLink: '',
    facebookLink: '',
    linkedInLink: '',
  });

  const [errors, setErrors] = useState({
    userName: '',
    description: '',
    twitterLink: '',
    facebookLink: '',
    linkedInLink: '',
  });

  const {
    userName,
    description,
    twitterLink,
    facebookLink,
    linkedInLink,
  } = formData;

  useEffect(() => {
    getProfileRequest();
  }, []);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const errors = publicProfileValidate(formData);

    if (!isEmpty(errors)) {
      setErrors(errors);
    } else {
      setErrors({});
      updateProfileRequest(formData);
    }
  };

  return (
    <>
      {isProfileLoading ? (
        <Spinner />
      ) : (
        <form className={styles.profileWrapper} onSubmit={onSubmit} noValidate>
          <div className={styles.userFullName}>
            <div>
              <input
                type="text"
                name="userName"
                value={userName}
                placeholder={`${t('Username')}`}
                onChange={onChange}
              />
              {errors.userName && (
                <span className={styles.invalidFeedback}>
                  {errors.userName}
                </span>
              )}
            </div>
          </div>
          <div className={styles.description}>
            <textarea
              type="text"
              rows="4"
              name="description"
              value={description}
              placeholder={`${t('Description')}`}
              onChange={onChange}
            />
            {errors.description && (
              <span className={styles.invalidFeedback}>
                {errors.description}
              </span>
            )}
          </div>
          <div className={styles.social}>
            <div>
              <div>
                <FaTwitter className={styles.twitterIcon} />
                <input
                  type="url"
                  name="twitterLink"
                  value={twitterLink}
                  placeholder={links.twitter}
                  onChange={onChange}
                />
                {errors.twitterLink && (
                  <span className={styles.invalidFeedback}>
                    {errors.twitterLink}
                  </span>
                )}
              </div>
              <div>
                <FaFacebookF className={styles.facebookIcon} />
                <input
                  type="url"
                  name="facebookLink"
                  value={facebookLink}
                  placeholder={links.facebook}
                  onChange={onChange}
                />
                {errors.facebookLink && (
                  <span className={styles.invalidFeedback}>
                    {errors.facebookLink}
                  </span>
                )}
              </div>
              <div>
                <FaLinkedinIn className={styles.linkedinIcon} />
                <input
                  type="url"
                  name="linkedInLink"
                  value={linkedInLink}
                  placeholder={links.linkedIn}
                  onChange={onChange}
                />
                {errors.linkedInLink && (
                  <span className={styles.invalidFeedback}>
                    {errors.linkedInLink}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <button type="submit">{`${t('Save')}`}</button>
          </div>
        </form>
      )}
    </>
  );
};

ProfileData.propTypes = {
  getProfileRequest: PropTypes.func.isRequired,
  updateProfileRequest: PropTypes.func.isRequired,
  isProfileLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  profile: state.user.profile,
  isProfileLoading: state.user.isProfileLoading,
});

const mapDispatchToProps = { getProfileRequest, updateProfileRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation('translations')(ProfileData));
