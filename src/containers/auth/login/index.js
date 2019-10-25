import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from 'react-icons/fa';
import { withTranslation } from 'react-i18next';

import { Spinner } from '../../../components/spinner';
import { Modal } from '../../../components/modal';
import { loginRequest, socialLoginRequest } from '../../../actions/auth';
import { loginValidate } from '../../../validation/auth';
import { links } from '../../../utils/constants';

import GoogleIcon from '../../../../public/assets/google.svg';
import LinkedInIcon from '../../../../public/assets/linkedin.svg';

import styles from '../styles.module.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
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

  closeModal = () => {
    const { onModalClose } = this.props;

    onModalClose(false);

    this.setState({
      email: '',
      password: '',
      errors: {},
    });
  };

  passwordVisibility = () => {
    this.setState((previousState) => ({
      hidden: !previousState.hidden
    }));
  };

  openForgotPasswordModal = () => {
    const { onModalClose, onModalCloseForgotPass } = this.props;

    onModalClose(false);
    onModalCloseForgotPass(true);

    this.setState({
      email: '',
      password: '',
      errors: {},
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { loginRequest, onModalClose } = this.props;

    const errors = loginValidate(email, password);

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      const request = new Promise((resolve, reject) => {
        this.setState({ isLoading: true });
        loginRequest({ email, password, resolve, reject });
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
    const { isLoading, email, password, errors } = this.state;
    const { modalStatus, t: translate } = this.props;

    return (
      <>
        <Modal open={modalStatus} onClose={this.closeModal}>
          {isLoading && <Spinner />}
          <h2 className={styles.title}>{`${translate(
            'Log In to your Das Pish account'
          )}`}</h2>

          <form onSubmit={this.onSubmit} noValidate>
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

            {errors.email || errors.status === 404 ? (
              <span className={styles.invalidFeedback}>
                {errors.email ? translate(`${errors.email}`) : translate(`${errors.message}`)}
              </span>
            ) : (
              <div className={styles.reservedPlace}/>
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

            {errors.password || errors.status === 403 ? (
              <span className={styles.invalidFeedback}>
                {errors.password ? translate(`${errors.password}`) : translate(`${errors.message}`)}
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
              {`${translate('Log In')}`}
            </button>
            
            <span
              onClick={this.openForgotPasswordModal}
              className={styles.linkForgot}>
              {`${translate('Forgot Password?')}`}
            </span>
          </form>
        </Modal>
      </>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  socialLoginRequest: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  loginRequest,
  socialLoginRequest,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(withTranslation('translations')(Login))
);
