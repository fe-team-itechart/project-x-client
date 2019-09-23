import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';

import { Modal } from '../../../components/modal';
import { registerValidate } from '../../../validation/auth';
import { registerRequest, socialLoginRequest } from '../../../actions/auth';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/linkedin.svg';

import styles from '../styles.module.scss';

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
        <Modal open={modalStatus} onClose={this.closeModal}>
          <h2 className={styles.title}>Sign Up</h2>
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
              <span className={styles.invalidFeedback}>{errors.firstName}</span>
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
              <span className={styles.invalidFeedback}>{errors.lastName}</span>
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
              Sign Up
            </button>
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
  )(Register)
);
