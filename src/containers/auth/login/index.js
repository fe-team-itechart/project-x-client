import React, { Fragment, Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isEmpty } from 'lodash';
import queryString from 'query-string';
import { FaTimes } from 'react-icons/fa';

import { loginRequest, socialLoginRequest } from '../../../actions/auth';
import validateAuth from '../../../validation/auth';
import { ReactComponent as GoogleIcon } from '../../../assets/google.svg';
import { ReactComponent as LinkedIn } from '../../../assets/linkedin.svg';

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

  render() {
    const { email, password, errors } = this.state;
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
                  <LinkedIn />
                </span>
                <span className={styles.google_button_text}>
                  Sign in with Linked In
                </span>
              </div>
            </a>
            <button type="submit" className={styles.submit}>
              Sign In
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

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
