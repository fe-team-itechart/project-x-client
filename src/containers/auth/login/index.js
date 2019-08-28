import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { isEmpty } from 'lodash';
import GoogleLogin from 'react-google-login';

import { loginRequest, googleLoginRequest } from '../../../actions/auth';
import validateAuth from '../../../validation/auth';

import styles from '../styles.module.scss';

Modal.setAppElement('#root');

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  closeModal = () => {
    this.props.onModalClose(false);
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

    const errors = validateAuth({
      email,
      password,
    });

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {} });
      loginRequest({ email, password });
      onModalClose(false);
    }
  };

  handleGoogleResponse = response => {
    const { googleLoginRequest, onModalClose } = this.props;
    googleLoginRequest(response);
    onModalClose(false);
  };

  render() {
    const { email, password, errors } = this.state;
    const { modalStatus } = this.props;
    return (
      <Fragment>
        <Modal
          isOpen={modalStatus}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={styles.modal}>
          <FaTimes onClick={this.closeModal} className={styles.closeModal} />
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
            {errors.email && (
              <span className={styles.invalid_feedback}>{errors.email}</span>
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
              <span className={styles.invalid_feedback}>{errors.password}</span>
            )}
            <GoogleLogin
              clientId={process.env.CLIENT_ID}
              onSuccess={this.handleGoogleResponse}
              buttonText="Login"
              className={styles.googleButton}
              cookiePolicy={'single_host_origin'}
            />
            ,
            <button type="submit" className={styles.submit}>
              Sign In
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginRequest,
  googleLoginRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
