import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isEmpty } from 'lodash';
import queryString from 'query-string';
import { FaTimes } from 'react-icons/fa';

import { registerValidate } from '../../../validation/auth';

import { registerRequest, socialLoginRequest } from '../../../actions/auth';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/linkedin.svg';
import styles from '../styles.module.scss';

Modal.setAppElement('#root');

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    this.props.onModalClose(false);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;
    const { registerRequest, onModalClose } = this.props;

    const errors = registerValidate(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      const request = new Promise((resolve, reject) => {
        registerRequest({
          firstName,
          lastName,
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
        },
        errors => {
          this.setState({ errors });
        }
      );
    }
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;
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
          <FaTimes onClick={this.closeModal} className={styles.close_modal} />
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Sign Up</h2>
          <form onSubmit={this.onSubmit} noValidate>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={this.onChange}
            />
            {errors.firstName && (
              <span className={styles.invalid_feedback}>
                {errors.firstName}
              </span>
            )}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={this.onChange}
            />
            {errors.lastName && (
              <span className={styles.invalid_feedback}>{errors.lastName}</span>
            )}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.onChange}
            />
            {(errors.email || errors.status === 400) && (
              <span className={styles.invalid_feedback}>
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
            {errors.password && (
              <span className={styles.invalidFeedback}>{errors.password}</span>
            )}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.onChange}
            />
            <a href={googleURL}>
              <div className={styles.google_button}>
                <span className={styles.google_button_icon}>
                  <GoogleIcon />
                </span>
                <span className={styles.google_button_text}>
                  Sign in with Google
                </span>
              </div>
            </a>
            <a href={linkedInURL}>
              <div className={styles.linkedin_button}>
                <span className={styles.linkedin_button_icon}>
                  <LinkedInIcon />
                </span>
                <span className={styles.linkedin_button_text}>
                  Sign in with Linked In
                </span>
              </div>
            </a>
            <button type="submit" className={styles.submit}>
              Sign Up
            </button>
          </form>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = {
  registerRequest,
  socialLoginRequest,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Register)
);
