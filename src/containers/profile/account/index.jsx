import React, { Component } from 'react';

import { isEmpty } from 'lodash';
import { withTranslation } from 'react-i18next';

import { changeAccountValidate } from '../../../validation/auth';
import { changeAccountData } from '../../../services/auth';

import styles from './styles.module.scss';

class Account extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const errors = changeAccountValidate(email, password);

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else {
      this.setState({
        email: '',
        password: '',
        errors: {},
      });
      changeAccountData({ email, password });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { password, email, errors } = this.state;
    const { t: translate } = this.props
    return (
      <>
        <div className={styles.accountWrapper}>
          <form onSubmit={this.onSubmit}>
            <div className={styles.password}>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.onChange}
              />
              {errors.email && (
                <div className={styles.invalidFeedback}>{errors.email}</div>
              )}
            </div>
            <div className={styles.password}>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.onChange}
              />
              {errors.password && (
                <div className={styles.invalidFeedback}>{errors.password}</div>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <button type="submit">{`${translate('Save')}`}</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withTranslation('translations')(Account);
