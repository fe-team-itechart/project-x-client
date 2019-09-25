import React, { PureComponent } from 'react';

import queryString from 'query-string';
import { isEmpty } from 'lodash';

import { resetPassword } from '../../../services/auth';
import { changePasswordValidate } from '../../../validation/auth';
import ShowMessage from '../showMessage';
import Spinner from '../../../components/spinner';
import Form from '../../../components/form';
import Input from '../../../components/input';
import Button from '../../../components/button';

import styles from './styles.module.scss';

class ResetPassword extends PureComponent {
  state = {
    password: null,
    passwordConfirm: null,
    pending: false,
    message: null,
    showNotifications: {
      validationShow: false,
      successShow: false,
      errorShow: false,
      formShow: true,
    },
  };

  componentDidMount() {
    const { id: token } = queryString.parse(location.search);
    this.setState({
      token
    });
  }

  showCurrentMessage = ({
    keys = [],
    message = '',
    pending = false,
    additionalInjections = {},
  }) => {
    const defaultMessages = {
      validationShow: false,
      successShow: false,
      errorShow: false,
      formShow: false,
    };

    const newValues = {};

    keys.forEach(el => {
      newValues[el] = true;
    });

    this.setState({
      ...additionalInjections,
      pending,
      message,
      showNotifications: {
        ...defaultMessages,
        ...newValues,
      },
    });
  };

  preValidateForm = ({ password, passwordConfirm }) => {
    const errors = changePasswordValidate(password, passwordConfirm);
    if (!isEmpty(errors)) {
      this.showCurrentMessage({
        keys: ['formShow', 'validationShow'],
        message: errors.password
      });
      return false;
    }
    return true;
  };

  sendReset = async e => {
    e.preventDefault();
    this.showCurrentMessage({ message: null, pending: true });
    const { token, passwordConfirm, password } = this.state;
    const valid = this.preValidateForm({ password, passwordConfirm });
    if (valid) {
      const { status, message } = await resetPassword({
        token,
        password,
        confirmPassword: passwordConfirm,
      });
      if (status < 300) {
        this.showCurrentMessage({
          keys: ['successShow'],
          message,
          pending: false,
        });
      } else {
        this.showCurrentMessage({
          keys: ['errorShow'],
          message,
          pending: false,
        });
      }
    }
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { pending, message, showNotifications } = this.state;

    const {
      validationShow,
      successShow,
      errorShow,
      formShow,
    } = showNotifications;

    const {
      input,
      btn,
      form,
      row,
      wrapper_form: wrapperForm,
      error_message: errorMessage,
      success_message: successMessage,
      big_size_message: bigSizeMessage,
      btn_right_position: btnRightPosition,
      btn_margin_top: btnMarginTop,
    } = styles;

    return (
      <div className={wrapperForm}>
        {formShow && (
          <Form name="resetPasswordForm" className={form}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className={`${input} ${row}`}
              onChange={this.onChangeInput}
              required
            />
            <Input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Password"
              className={`${input} ${row}`}
              onChange={this.onChangeInput}
              required
            />
            <ShowMessage
              classStyle={`${row} ${errorMessage}`}
              condition={validationShow}>
              {message}
            </ShowMessage>
            <Button
              type="submit"
              className={`${btn} ${btnRightPosition} ${btnMarginTop}`}
              onClick={this.sendReset}>
              Push
            </Button>
          </Form>
        )}
        <ShowMessage
          classStyle={`${row} ${bigSizeMessage} ${errorMessage}`}
          condition={errorShow}>
          {message}
        </ShowMessage>
        <ShowMessage classStyle={`${row}`} condition={pending}>
          <Spinner loading={pending} />
        </ShowMessage>
        <ShowMessage
          classStyle={`${row} ${bigSizeMessage} ${successMessage}`}
          condition={successShow}>
          Password is Updated
        </ShowMessage>
      </div>
    );
  }
}

export default ResetPassword;
