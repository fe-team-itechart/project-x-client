import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { Profile } from '../profile';

import { changePasswordValidate } from '../../../validation/auth';
import { changePassword } from '../../../services/auth';

import styles from './styles.module.scss';

class AccountTab extends Component {
  state = {
    password: '',
    confirmPassword: '',
    update: true,
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
      this.setState({ update: !this.state.update });
      this.setState({
        password: '',
        confirmPassword: '',
        errors: {},
      });
      changePassword(id, { password });
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updatePassword = () => {
    this.setState({
      update: false,
    });
  };

  closeUpdate = () => {
    this.setState({
      password: '',
      confirmPassword: '',
      update: true,
      errors: {},
    });
  };

  render() {
    const { password, confirmPassword, errors, update } = this.state;
    const {
      account,
      pass,
      buttons_block,
      payment_btn,
      payment_btn_block,
      invalid_feedback,
    } = styles;

    return (
      <>
        <Profile />
        <div className={account}>
          <form onSubmit={this.onSubmit}>
            <div className={pass}>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                disabled={update}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className={invalid_feedback}>{errors.password}</div>
              )}
            </div>
            <div className={pass}>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                disabled={update}
                onChange={this.onChange}
              />
            </div>
            <div className={buttons_block}>
              {update ? (
                <div>
                  <button type="button" onClick={this.updatePassword}>
                    update password
                  </button>
                  <button type="button" className={payment_btn}>
                    Add payment data
                  </button>
                </div>
              ) : (
                <>
                  <button type="submit">save</button>
                  <button type="button" onClick={this.closeUpdate}>
                    close
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null
)(AccountTab);
