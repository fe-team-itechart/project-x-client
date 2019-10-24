import React, { Component } from 'react';

import { isEmpty } from 'lodash';
import { withTranslation } from 'react-i18next';

import Profile from '../profile';
import { changePasswordValidate } from '../../../validation/auth';
import { changePassword } from '../../../services/auth';

import styles from './styles.module.scss';

class Account extends Component {
  state = {
    password: '',
    confirmPassword: '',
    update: true,
    errors: {},
  };

  onSubmit = event => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;

    const errors = changePasswordValidate(password, confirmPassword);

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      this.setState((previousState => ({
        password: '',
        confirmPassword: '',
        errors: {},
        update: !previousState.update
      })));

      changePassword({ password });
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
    const { t: translate } = this.state;

    return (
      <>
        <Profile />
        <div className={styles.account}>
          <form onSubmit={this.onSubmit}>
            <div className={styles.password}>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder={`${translate('Password')}`}
                disabled={update}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className={styles.invalidFeedback}>{errors.password}</div>
              )}
            </div>

            <div className={styles.password}>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder={`${translate('Confirm Password')}`}
                disabled={update}
                onChange={this.onChange}
              />
            </div>

            <div className={styles.buttonsBlock}>
              {update ? (
                <div>
                  <button type="button" onClick={this.updatePassword}>
                    {translate('Update password')}
                  </button>

                  <button type="button" className={styles.paymentBtn}>
                    {translate('Add payment data')}
                  </button>
                </div>
              ) : (
                <>
                  <button type="submit">{translate('Save')}</button>
                  <button type="button" onClick={this.closeUpdate}>
                    {translate('Close')}
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

export default withTranslation('translations')(Account);
