import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { isEmpty } from 'lodash';

import { publicProfileValidate } from '../../../validation/profile';
import { getProfileRequest, updateProfileRequest } from '../../../actions/profile';
import { Profile } from '../profile';

import styles from './styles.module.scss';

const ProfileTab = ({ profile, getProfileRequest, updateProfileRequest }) => {

  const [checked, setCheck] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    description: '',
    twitterLink: '',
    facebookLink: '',
    linkedInLink: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    description: '',
    twitterLink: '',
    facebookLink: '',
    linkedInLink: ''
  });

  const {
    firstName,
    lastName,
    description,
    twitterLink,
    facebookLink,
    linkedInLink
  } = formData;

  const {
    profile: profile_class,
    user_fio,
    description: description_class,
    social,
    twitter_icon,
    facebook_icon,
    linkedin_icon,
    invalid_feedback,
  } = styles;

  useEffect(() => {
    getProfileRequest();
  }, []);

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile])

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
      setCheck(!checked);
      updateProfileRequest(formData);
    }
  }

  const onCheck = () => {
    setCheck(!checked);
  }

  return (
    <>
      <Profile />
      <form className={profile_class} onSubmit={onSubmit} noValidate>
        <div className={user_fio}>
          <div>
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First name"
              disabled={checked}
              onChange={onChange}
            />
            {errors.firstName && (
              <span className={invalid_feedback}>
                {errors.firstName}
              </span>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last name"
              disabled={checked}
              onChange={onChange}
            />
            {errors.lastName && (
              <span className={invalid_feedback}>
                {errors.lastName}
              </span>
            )}
          </div>
        </div>
        <div className={description_class}>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            disabled={checked}
            onChange={onChange}
          />
          {errors.description && (
            <span className={invalid_feedback}>
              {errors.description}
            </span>
          )}
        </div>
        <div className={social}>
          <div>
            <FaTwitter className={twitter_icon} />
            <input
              type="url"
              name="twitterLink"
              value={twitterLink}
              placeholder="http://twitter.com/"
              disabled={checked}
              onChange={onChange}
            />
            {errors.twitterLink && (
              <span className={invalid_feedback}>
                {errors.twitterLink}
              </span>
            )}
          </div>
          <div>
            <FaFacebookF className={facebook_icon} />
            <input
              type="url"
              name="facebookLink"
              value={facebookLink}
              placeholder="https://www.facebook.com/"
              disabled={checked}
              onChange={onChange}
            />
            {errors.facebookLink && (
              <span className={invalid_feedback}>
                {errors.facebookLink}
              </span>
            )}
          </div>
          <div>
            <FaLinkedinIn className={linkedin_icon} />
            <input
              type="url"
              name="linkedInLink"
              value={linkedInLink}
              placeholder="https://www.linkedin.com/"
              disabled={checked}
              onChange={onChange}
            />
            {errors.linkedInLink && (
              <span className={invalid_feedback}>
                {errors.linkedInLink}
              </span>
            )}
          </div>
        </div>
        {checked ? (
          <button type="button" onClick={onCheck}>
            Update
          </button>
        ) : (
            <>
              <button type="submit">
                Save
              </button>
              <button type="button" onClick={onCheck}>
                Close
              </button>
            </>
          )}
      </form>
    </>
  );
};

ProfileTab.propTypes = {
  getProfileRequest: PropTypes.func.isRequired,
  updateProfileRequest: PropTypes.func.isRequired,
  profile: PropTypes.object
};

const mapStateToProps = state => ({
  profile: state.user.profile
});

const mapDispatchToProps = { getProfileRequest, updateProfileRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTab);
