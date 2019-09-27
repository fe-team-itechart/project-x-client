import React, { PureComponent } from 'react';

import queryString from 'query-string';
import { isEmpty } from 'lodash';

import { Redirect } from 'react-router-dom';

import { resetPassword } from '../../../services/auth';
import { changePasswordValidate } from '../../../validation/auth';
import Spinner from '../../../components/spinner';

import styles from './styles.module.scss';

class ResetPassword extends PureComponent {
  state = {
    password: null,
    passwordConfirm: null,
    success: false,
    pending: false,
    message: null,
    token: null,
    redirect: false,
    errors: {},
  };

  componentDidMount() {
    const { id: token } = queryString.parse(location.search);
    this.setState({
      token,
    });
  }

  preValidateForm = ({ password, passwordConfirm }) => {
    const errors = changePasswordValidate(password, passwordConfirm);
    if (!isEmpty(errors)) {
      this.setState({
        errors,
      });
      return false;
    }
    return true;
  };

  sendReset = async e => {
    e.preventDefault();
    const { token, passwordConfirm, password } = this.state;
    const valid = this.preValidateForm({ password, passwordConfirm });
    if (valid) {
      this.setState({
        pending: true,
        message: null,
        success: false,
      });
      const { status, message } = await resetPassword({
        token,
        password,
        confirmPassword: passwordConfirm,
      });
      this.setState({
        pending: false,
        message,
        success: status === 200,
      });
      setTimeout(() => {
        this.setState({
          redirect: true,
        });
      }, 1500);
    }
  };

  onChangeInput = e => {
    this.setState({
      errors: {},
      message: null,
      success: false,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { pending, message, errors, success, redirect } = this.state;

    return (
      <div className={styles.wrapperForm}>
        {!pending && !success && (
          <form name="resetPasswordForm" className={styles.form}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className={`${styles.input} ${styles.row}`}
              onChange={this.onChangeInput}
              required
            />
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Password"
              className={`${styles.input} ${styles.row}`}
              onChange={this.onChangeInput}
              required
            />
            <div className={`${styles.row} ${styles.errorMessage}`}>
              {errors.password || message}
            </div>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnRightPosition} ${styles.btnMarginTop}`}
              onClick={this.sendReset}>
              Push
            </button>
          </form>
        )}

        {pending && (
          <div className={styles.form}>
            <Spinner loading={pending} />
          </div>
        )}

        {!pending && success && (
          <>
            <div
              className={`${styles.form} ${styles.successMessage} ${styles.bigSizeMessage}`}>
              {message}
            </div>
          </>
        )}

        {redirect && (
          <Redirect
            to={{
              pathname: '/',
              state: { from: this.props.location },
            }}
          />
        )}
      </div>
    );
  }
}

export default ResetPassword;
