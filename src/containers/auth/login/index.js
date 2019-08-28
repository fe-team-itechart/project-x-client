import React, { Fragment, Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { isEmpty } from 'lodash';
import queryString from 'query-string';
import { FaTimes } from 'react-icons/fa';

import {
  loginRequest,
  googleLoginRequest,
  linkedInLoginRequest,
} from '../../../actions/auth';
import validateAuth from '../../../validation/auth';

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
    if (parsed.tokenGoogle) {
      this.props.googleLoginRequest(parsed.tokenGoogle);
      history.push('/');
    }
    if (parsed.tokenLinkedin) {
      this.props.linkedInLoginRequest(parsed.tokenLinkedin);
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
                  <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                      id="Shape"
                      fill="#EA4335"
                    />
                    <path
                      d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                      id="Shape"
                      fill="#FBBC05"
                    />
                    <path
                      d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                      id="Shape"
                      fill="#4285F4"
                    />
                    <path
                      d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                      fill="#34A853"
                    />
                  </svg>
                </span>
                <span className={styles.google_button_text}>
                  Sign in with Google
                </span>
              </div>
            </a>
            <a href={linkedInURL}>
              <div className={styles.google_button}>
                <span className={styles.google_button_icon}>
                  <svg viewBox="0 0 30 30" version="1.1">
                    <path
                      d="M3.44222222,0 C5.34,0 6.88,1.54111111 6.88,3.44 C6.88,5.34 5.34,6.88111111 3.44222222,6.88111111 C1.53666667,6.88111111 0,5.34 0,3.44 C0,1.54111111 1.53666667,0 3.44222222,0 L3.44222222,0 Z M0.471111111,9.48888889 L6.41,9.48888889 L6.41,28.5777778 L0.471111111,28.5777778 L0.471111111,9.48888889 Z"
                      id="Fill-6"
                    />
                    <path
                      d="M10,9.47333333 L15.6866667,9.47333333 L15.6866667,12.0833333 L15.7688889,12.0833333 C16.56,10.5822222 18.4955556,9 21.3811111,9 C27.3888889,9 28.4988889,12.9522222 28.4988889,18.0933333 L28.4988889,28.5622222 L22.5666667,28.5622222 L22.5666667,19.2788889 C22.5666667,17.0655556 22.5288889,14.2177778 19.4844444,14.2177778 C16.3966667,14.2177778 15.9255556,16.63 15.9255556,19.1211111 L15.9255556,28.5622222 L10,28.5622222 L10,9.47333333"
                      id="Fill-7"
                    />
                  </svg>
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
  googleLoginRequest,
  linkedInLoginRequest,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
