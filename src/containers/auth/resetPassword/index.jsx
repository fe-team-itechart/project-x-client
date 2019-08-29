import React, { PureComponent } from 'react';

import styles from './styles.module.scss';
import { resetApprove, resetPassword } from '../../../services/auth';
import { passwordValidation } from '../../../validation/auth';
import ShowMessage from '../showMessage/index';
import Spinner from '../../../components/spinner';

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
      row_flex_end: rowFlexEnd,
      wrapper_form: wrapperForm,
      error_message: errorMessage,
      success_message: successMessage,
      big_size_message: bigSizeMessage,
    } = styles;

    let showErrorNotification = !!message;
    let showLinkIncorrect = !!status && !success && (status > 300);
    let showSpinner = !status && !success;
    let showSuccessMessage = !!success;

    return (
      <div className={wrapperForm}>
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

            <ShowMessage classStyle={`${errorMessage}`} condition={showErrorNotification}>
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
          condition={showLinkIncorrect}>
          Link is uncorrected
        </ShowMessage>
        <ShowMessage
          classStyle={`${bigSizeMessage} ${errorMessage}`}
          condition={showSpinner}>
          <Spinner loading={showSpinner} />
        </ShowMessage>
        <ShowMessage
          classStyle={`${bigSizeMessage} ${successMessage}`}
          condition={showSuccessMessage}>
          Password is Updated
        </ShowMessage>
      </div>
    );
  }
}

export default ResetPassword;
