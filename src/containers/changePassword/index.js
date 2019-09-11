import React, { Component } from 'react';
import { connect } from 'react-redux';

import { isEmpty } from 'lodash';

import { changePasswordValidate } from '../../validation/auth';
import { changePassword } from '../../services/auth';

import styles from './styles.module.scss';

class ChangePassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    errors: {},
  };

  onSubmit = event => {
    event.preventDefault();
    const {
      user: {
        user: { id },
      },
    } = this.props;
    const { password, confirmPassword } = this.state;

    const errors = changePasswordValidate(password, confirmPassword);

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {} });
      changePassword(id, { password });
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null
)(ChangePassword);
