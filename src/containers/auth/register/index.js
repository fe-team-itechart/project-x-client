import React, { Fragment, Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import { FaTimes } from 'react-icons/fa';
import { registerRequest, socialLoginRequest } from '../../../actions/auth';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/linkedin.svg';
import validateAuth from '../../../validation/auth';

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

    const errors = validateAuth({ firstName, lastName, email, password });

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else if (password !== confirmPassword) {
      this.setState(state => {
        state.errors.password = 'Password do not match';
        return state;
      });
    } else {
      this.setState({ errors: {} });
      registerRequest({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      onModalClose(false);
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
      <Fragment>
        <Modal
          isOpen={modalStatus}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={styles.modal}>
          <FaTimes onClick={this.closeModal} className={styles.closeModal} />
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
            {errors.email && (
              <span className={styles.invalidFeedback}>{errors.email}</span>
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
              <div className={styles.google_button}>
                <span className={styles.google_button_icon}>
                  <LinkedInIcon />
                </span>
                <span className={styles.google_button_text}>
                  Sign in with Linked In
                </span>
              </div>
            </a>
            <button type="submit" className={styles.submit}>
              Sign Up
            </button>
          </form>
        </Modal>
      </Fragment>
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
