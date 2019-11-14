import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { withTranslation } from 'react-i18next';
import { showToast } from '../../../utils/toast';

import { forgotPasswordRequest } from '../../../services/auth';
import { emailValidate } from '../../../validation/auth';

import { Spinner } from '../../../components/spinner';
import { Modal } from '../../../components/modal';

import styles from './styles.module.scss';

class ForgotPassword extends PureComponent {
  state = {
    email: null,
    pending: false,
    message: null,
    success: false,
  };

  preValidateForm = ({ email }) => {
    const errors = emailValidate(email);

    if (!isEmpty(errors)) {
      showToast('error', errors.email);
      return false;
    }
    return true;
  };

  send = async e => {
    e.preventDefault();
    const email = this.state.email;
    const valid = this.preValidateForm({ email });
    
    if (valid) {
      this.setState({
        pending: true,
        message: null,
      });

      const { status, message } = await forgotPasswordRequest({ email });

      if( status !== 200 ) showToast('error', message);

      this.setState({
        pending: false,
        message,
        success: status === 200,
      });
    }
  };

  modalClose = () => {
    const { onModalClose } = this.props;
    onModalClose(false);
  };

  onChangeInput = e => {
    this.setState({
      email: e.target.value,
      message: null,
      success: false,
    });
  };

  render() {
    const { pending, message, success } = this.state;

    const { modalStatus, t: translate } = this.props;

    return (
      <Modal open={modalStatus} onClose={this.modalClose}>
        {!pending && !success && (
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder={`${translate('Enter E-mail')}`}
              name="forgot-password-id"
              id="forgot-password-id"
              type="email"
              onChange={this.onChangeInput}
              required
            />
            <button
              type="submit"
              className={`${styles.btn}`}
              onClick={this.send}>
              {`${translate('Send')}`}
            </button>
          </form>
        )}

        {pending && <Spinner loading={pending} />}

        {!pending && message && success && (
          <div className={`${styles.form} ${styles.successMessage}`}>
            {message}
          </div>
        )}
      </Modal>
    );
  }
}

ForgotPassword.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default (withTranslation('translations')(ForgotPassword));
