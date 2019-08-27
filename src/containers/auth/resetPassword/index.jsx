import React, { PureComponent } from 'react';
import { CircleSpinner } from 'react-spinners-kit';

import styles from './styles.module.scss';
import { resetApprove, resetPassword } from '../../../services/auth';
import { passwordValidation } from '../../../validation/auth';
import ShowMessage from '../showMessage/index';

class ResetPassword extends PureComponent {
  state = {
    success: false,
    status: null,
    password: null,
    passwordConfirm: null,
    linkId: null,
    message: null,
  };

  componentDidMount() {
    const params = new URLSearchParams(location.search);
    this.sendApprove(params.get('id'));
  }

  sendApprove = async linkId => {
    const { status, data } = await resetApprove(linkId);
    let stateNew = {
      status: 400,
      linkId: null,
    };
    if (data.name !== 'Error') {
      stateNew = {
        status,
        linkId,
      };
    }
    this.setState(stateNew);
  };

  sendReset = async (e) => {
    e.preventDefault();
    const { linkId, password, passwordConfirm } = this.state;
    let stateNew = { status: null, success: null };
    this.setState(stateNew);
    const error = passwordValidation({ password, passwordConfirm });
    if (error.error) {
      stateNew = {
        status: 200,
        message: error.error.details[0].message,
      };
    }
    if (!error.error) {
      const { status, data } = await resetPassword({
        linkId,
        password,
        passwordConfirm,
      });
      stateNew = {
        status,
        success: status < 300,
        message: (status >= 300) ? data.message : null
      };
    }
    this.setState(stateNew);
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { status, success, message } = this.state;
    const {
      input,
      btn,
      form,
      row,
      rowFlexEnd,
      wrapperF,
      errorMessage,
      successMessage,
      big_size_message: bigSizeMessage,
    } = styles;

    return (
      <div className={wrapperF}>
        {status && status < 300 && !success && (
          <form name="resetPasswordForm" className={form}>
            <div className={row}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={this.inputHandler}
                className={input}
                required
              />
            </div>
            <div className={row}>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirm Password"
                onChange={this.inputHandler}
                className={input}
                required
              />
            </div>

            <ShowMessage classStyle={`${errorMessage}`} condition={!!message}>
              <p>&nbsp;{message}</p>
            </ShowMessage>
            <div className={`${row} ${rowFlexEnd}`}>
              <button type="submit" className={btn} onClick={this.sendReset}>
                Push
              </button>
            </div>
          </form>
        )}
        <ShowMessage
          classStyle={`${bigSizeMessage} ${errorMessage}`}
          condition={status && !success && status > 300}>
          Link is uncorrected
        </ShowMessage>
        <ShowMessage
          classStyle={`${bigSizeMessage} ${errorMessage}`}
          condition={!status && !success}>
          <CircleSpinner color="#fff" size={40} loading={!status && !success} />
        </ShowMessage>
        <ShowMessage
          classStyle={`${bigSizeMessage} ${successMessage}`}
          condition={success}>
          Password is Updated
        </ShowMessage>
      </div>
    );
  }
}

export default ResetPassword;
