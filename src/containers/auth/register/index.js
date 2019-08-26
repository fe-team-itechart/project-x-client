import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import GoogleLogin from 'react-google-login';
import { FaTimes } from 'react-icons/fa';
import { registerRequest } from '../../../actions/auth';
import styles from '../styles.module.scss';
import validateAuth from '../../../validation/auth';
import axios from 'axios';

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
    return (
      <>
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
            <GoogleLogin
              clientId={process.env.CLIENT_ID}
              buttonText="Login"
              className={styles.googleButton}
              cookiePolicy={'single_host_origin'}
            />
            <button type="submit" className={styles.submit}>
              Sign Up
            </button>
          </form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registerRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
