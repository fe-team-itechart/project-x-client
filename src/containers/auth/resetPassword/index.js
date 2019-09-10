import React, { Component } from 'react';

import styles from './styles.module.scss';
import { resetApprove, resetPassword } from '../../../services/auth';
import { passwordValidation } from '../../../validation/auth';
import ShowMessage from '../showMessage';
import Spinner from '../../../components/spinner';
import Form from '../../../components/form';
import Input from '../../../components/input';
import Button from '../../../components/button';

class ResetPassword extends Component {
  state = {
    password: null,
    passwordConfirm: null,
    height: 0,
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
    const params = new URLSearchParams(location.search);
    this.sendApprove(params.get('id'));
  }

  showCurrentMessage = (
    keys = [],
    message,
    pending = false,
    additionalInjections = {}
  ) => {
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
    const errors = passwordValidation({ password, passwordConfirm });
    if (errors.error) {
      this.showCurrentMessage(
        ['formShow', 'validationShow'],
        errors.error.details[0].message
      );
      return false;
    }
    return true;
  };

  sendApprove = async linkId => {
    this.showCurrentMessage([''], null, true);
    const { status, data } = await resetApprove(linkId);

    if (status < 300) {
      this.showCurrentMessage(['formShow'], data.toString(), false, { linkId });
    } else {
      this.showCurrentMessage(['errorShow'], data.message, false);
    }
  };

  sendReset = async e => {
    e.preventDefault();
    this.showCurrentMessage([''], null, true);
    const { linkId, passwordConfirm, password } = this.state;
    const valid = this.preValidateForm({ password, passwordConfirm });
    if (valid) {
      const { status, data } = await resetPassword({
        linkId,
        password,
        passwordConfirm,
      });
      if (status < 300) {
        this.showCurrentMessage(['successShow'], data, false);
      } else {
        this.showCurrentMessage(['errorShow'], data.toString(), false);
      }
    }
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { pending, message, showNotifications, height } = this.state;

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
      <div className={wrapperForm} >
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
