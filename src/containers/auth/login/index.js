import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { FaTimes } from 'react-icons/fa';
import GoogleLogin from 'react-google-login';

import { loginRequest, googleLoginRequest } from '../../../actions/auth';
import styles from '../styles.module.scss';
import validateAuth from '../../../validation/auth';

Modal.setAppElement('#root');

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  closeModal = () => {
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

    const {
      modal,
      submit,
      link_forgot: linkForgot,
      invalid_feedback: invalidFeedback,
      close_modal: closeModal,
      google_button: googleButton,
    } = styles;
    return (
      <>
        <Modal
          isOpen={modalStatus}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={modal}>
          <FaTimes onClick={this.closeModal} className={closeModal} />
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
              <span className={invalidFeedback}>{errors.email}</span>
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
              <span className={invalidFeedback}>{errors.password}</span>
            )}
            <GoogleLogin
              clientId={process.env.CLIENT_ID}
              onSuccess={this.handleGoogleResponse}
              buttonText="Login with Google Account"
              className={googleButton}
              cookiePolicy={'single_host_origin'}
            />
            <button type="submit" className={submit}>
              Sign In
            </button>
            <span onClick={closeModal} className={linkForgot}>
              Forgot Password?
            </span>
          </form>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = {
  loginRequest,
  googleLoginRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
