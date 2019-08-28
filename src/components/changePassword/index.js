import React, { Component } from 'react';

import { isEmpty } from 'lodash';

import validateAuth from '../../validation/auth';
import { changePassword } from '../../services/auth';

import styles from './styles.module.scss';

class ChangePassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    errors: {},
  };

  onSubmit = event => {
    const email = 'universezxcv@gmail.com';
    /* 
      Hard code, email will be received form forgotPassword component
    */
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    const errors = validateAuth({ password });
    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else if (password !== confirmPassword) {
      this.setState(state => {
        state.errors.password = 'Password do not match';
        return state;
      });
    } else {
      this.setState({ errors: {} });
      changePassword({ email, password });
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { password, confirmPassword, errors } = this.state;
    return (
      <section className={styles.container}>
        <h3>Reset password</h3>
        <form onSubmit={this.onSubmit}>
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
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={this.onChange}
          />
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default ChangePassword;
