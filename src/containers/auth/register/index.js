import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import {
  FaEye,
  FaEyeSlash,
  FaUserAlt,
  FaLock,
  FaEnvelope,
} from 'react-icons/fa';
import { withTranslation } from 'react-i18next';

import { Spinner } from '../../../components/spinner';
import { Modal } from '../../../components/modal';
import { registerValidate } from '../../../validation/auth';
import { registerRequest, socialLoginRequest } from '../../../actions/auth';
import { links } from '../../../utils/constants';
import GoogleIcon from '../../../../public/assets/google.svg';
import LinkedInIcon from '../../../../public/assets/linkedin.svg';

import styles from '../styles.module.scss';

class Register extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {},
    hidden: true,
    isLoading: false,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const parsed = queryString.parse(location.search);
    if (parsed.token) {
      this.props.socialLoginRequest(parsed.token);
      history.push('/');
    }
  }

  passwordVisibility = () => {
    this.setState((previousState) => ({
      hidden: !previousState.hidden
    }));
  };

  closeModal = () => {
    this.props.onModalClose(false);

    this.setState({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    });
  };

  alreadyHaveAccount = () => {
    this.closeModal();
    this.props.onModalCloseLog(true);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { userName, email, password, confirmPassword } = this.state;
    const { registerRequest, onModalClose } = this.props;

    const errors = registerValidate(userName, email, password, confirmPassword);

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      const request = new Promise((resolve, reject) => {
        this.setState({ isLoading: true });

        registerRequest({
          userName,
          email,
          password,
          confirmPassword,
          resolve,
          reject,
        });
      });

      request.then(
        () => {
          onModalClose(false);
          this.setState({ errors: {}, isLoading: false });
        },
        errors => {
          this.setState({ errors, isLoading: false });
        }
      );
    }
  };

  render() {
    const {
      userName,
      email,
      password,
      confirmPassword,
      errors,
      isLoading,
    } = this.state;
    const { modalStatus, t: translate } = this.props;

    return (
      <>
        <Modal open={modalStatus} onClose={this.closeModal}>
          {isLoading && <Spinner />}
          <h2 className={styles.title}>
            {`${translate('Create account and be a DasPish member!')}`}
          </h2>
          <form onSubmit={this.onSubmit} noValidate>
            <div className={styles.iconInput}>
              <FaUserAlt />
              <input
                type="text"
                id="userName"
                name="userName"
                value={userName}
                placeholder={`${translate('Username')}`}
                onChange={this.onChange}
              />
            </div>
            {errors.userName ? (
              <span className={styles.invalidFeedback}>
                {translate(`${errors.userName}`)}
              </span>
            ) : (
              <div className={styles.reservedPlace}/>
            )}

            <div className={styles.iconInput}>
              <FaEnvelope />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="E-Mail"
                onChange={this.onChange}
              />
            </div>
            {errors.email || errors.status === 400 ? (
              <span className={styles.invalidFeedback}>
                {errors.email ? translate(`${errors.email}`) : errors.message}
              </span>
            ) : (
              <div className={styles.reservedPlace} />
            )}

            <div className={styles.iconInput}>
              <div className={styles.password}>
                <FaLock />
                <input
                  type={this.state.hidden ? 'password' : 'text'}
                  id="password"
                  name="password"
                  value={password}
                  placeholder={`${translate('Password')}`}
                  onChange={this.onChange}
                />
              </div>
              <div className={styles.eyeIcon} onClick={this.passwordVisibility}>
                {this.state.hidden ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            {errors.password ? (
              <span className={styles.invalidFeedback}>{translate(`${errors.password}`) }</span>
            ) : (
              <div className={styles.reservedPlace} />
            )}

            <div className={styles.iconInput}>
              <FaLock />
              <input
                type={this.state.hidden ? 'password' : 'text'}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder={`${translate('Confirm Password')}`}
                onChange={this.onChange}
              />
            </div>
            {errors.confirmPassword || errors.status === 403 ? (
              <span className={styles.invalidFeedback}>
                {errors.confirmPassword
                  ? errors.confirmPassword
                  : errors.message}
              </span>
            ) : (
              <div className={styles.reservedPlace} />
            )}

            <div className={styles.socialButtonsContainer}>
              <a href={links.googleURL}>
                <div className={styles.googleButton}>
                  <span className={styles.googleButtonIcon}>
                    <GoogleIcon />
                  </span>
                </div>
              </a>
              <a href={links.linkedInURL}>
                <div className={styles.linkedinButton}>
                  <span className={styles.linkedinButtonIcon}>
                    <LinkedInIcon />
                  </span>
                </div>
              </a>
            </div>

            <button type="submit" className={styles.submit}>
              {`${translate('Create account')}`}
            </button>
            
            <span
              onClick={this.alreadyHaveAccount}
              className={styles.linkForgot}>
              {`${translate('Already have an account?')}`}
            </span>
          </form>
        </Modal>
      </>
    );
  }
}

Register.propTypes = {
  registerRequest: PropTypes.func.isRequired,
  socialLoginRequest: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  registerRequest,
  socialLoginRequest,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(withTranslation('translations')(Register))
);
