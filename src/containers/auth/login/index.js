import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import { FaTimes } from 'react-icons/fa';

import { loginRequest, socialLoginRequest } from '../../../actions/auth';
import { loginValidate } from '../../../validation/auth';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/linkedin.svg';

import styles from '../styles.module.scss';

Modal.setAppElement('#root');

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
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
        loginRequest({ email, password, resolve, reject });
      });
      request.then(
        () => {
          onModalClose(false);
        },
        errors => {
          this.setState({ errors });
        }
      );
    }
  };
  render() {
    const { email, password, errors } = this.state;
    const { modalStatus } = this.props;

    const linkedInURL = `api/users/auth/linkedin`;
    const googleURL = `api/users/auth/google`;

    return (
      <>
        <Modal
          style={{ overlay: { zIndex: 3 } }}
          isOpen={modalStatus}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={styles.modal}>
          <FaTimes
            onClick={this.closeModal}
            className={styles.closeModalStyle}
          />
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Sign In</h2>
          <form onSubmit={this.onSubmit} noValidate>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.onChange}
            />
            {(errors.email || errors.status === 404) && (
              <span className={styles.invalidFeedback}>
                {errors.email ? errors.email : errors.message}
              </span>
            )}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.onChange}
            />
            {(errors.password || errors.status === 403) && (
              <span className={styles.invalidFeedback}>
                {errors.password ? errors.password : errors.message}
              </span>
            )}
            <a href={googleURL}>
              <div className={styles.googleButton}>
                <span className={styles.googleButtonIcon}>
                  <GoogleIcon />
                </span>
                <span className={styles.googleButtonText}>
                  Sign in with Google
                </span>
              </div>
            </a>
            <a href={linkedInURL}>
              <div className={styles.linkedinButton}>
                <span className={styles.linkedinButtonIcon}>
                  <LinkedInIcon />
                </span>
                <span className={styles.linkedinButtonText}>
                  Sign in with Linked In
                </span>
              </div>
            </a>
            <button type="submit" className={styles.submit}>
              Sign In
            </button>
            <span
              onClick={this.openForgotPasswordModal}
              className={styles.linkForgot}>
              Forgot Password?
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
  )(Login)
);
