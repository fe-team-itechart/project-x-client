import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { isEmpty } from 'lodash';

import { publicProfileValidate } from '../../../validation/profile';
import { getProfileRequest, updateProfileRequest } from '../../../actions/profile';
import { links } from "../../../utils/constants";
import  { Profile }  from '../profile';

import styles from './styles.module.scss';

const Info = ({ profile, getProfileRequest, updateProfileRequest }) => {

  const [checked, setCheck] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    description: '',
    twitterLink: '',
    facebookLink: '',
    linkedInLink: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    description: '',
    twitterLink: '',
    facebookLink: '',
    linkedInLink: '',
  });

  const {
    firstName,
    lastName,
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
      setCheck(!checked);
      updateProfileRequest(formData);
    }
  };

  const onCheck = () => {
    setCheck(!checked);
  };

  return (
    <>
      <Profile />
      <form className={styles.profile} onSubmit={onSubmit} noValidate>
        <div className={styles.userFio}>
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
              <span className={styles.invalidFeedback}>{errors.firstName}</span>
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
              <span className={styles.invalidFeedback}>{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className={styles.description}>
          <textarea
            type="text"
            rows="4"
            name="description"
            value={description}
            placeholder="Description"
            disabled={checked}
            onChange={onChange}
          />
          {errors.description && (
            <span className={styles.invalidFeedback}>{errors.description}</span>
          )}
        </div>
        <div className={styles.social}>
          <div>
            <FaTwitter className={styles.twitterIcon} />
            <input
              type="url"
              name="twitterLink"
              value={twitterLink}
              placeholder={links.Twitter}
              disabled={checked}
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
              placeholder={links.Facebook}
              disabled={checked}
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
              placeholder={links.LinkedIn}
              disabled={checked}
              onChange={onChange}
            />
            {errors.linkedInLink && (
              <span className={styles.invalidFeedback}>
                {errors.linkedInLink}
              </span>
            )}
          </div>
        </div>
        <div className={styles.buttonsBlock}>
          {checked ? (
            <button type="button" onClick={onCheck}>
              Update
            </button>
          ) : (
            <>
              <button type="submit">Save</button>
              <button type="button" onClick={onCheck}>
                Close
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

Profile.propTypes = {
  getProfileRequest: PropTypes.func.isRequired,
  updateProfileRequest: PropTypes.func.isRequired,
  profile: PropTypes.object,
};

const mapStateToProps = state => ({
  profile: state.user.profile,
});

const mapDispatchToProps = { getProfileRequest, updateProfileRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Info);
