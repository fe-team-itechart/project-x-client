import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import styles from './styles.module.scss';
import { forgotPasswordRequest } from '../../../services/auth';
import { emailValidate } from '../../../validation/auth';

import ShowMessage from '../showMessage';
import Spinner from '../../../components/spinner';
import Form from '../../../components/form';
import Input from '../../../components/input';
import Button from '../../../components/button';

Modal.setAppElement('#root');

class ForgotPassword extends PureComponent {
  state = {
    email: null,
    pending: false,
    message: null,
    showNotifications: {
      validationShow: false,
      successShow: false,
      errorShow: false,
      formShow: true,
    },
  };

  showCurrentMessage = ({ keys = [], message = '', pending = false }) => {
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
      pending,
      message,
      showNotifications: {
        ...defaultMessages,
        ...newValues,
      },
    });
  };

  preValidateForm = ({ email }) => {
    const errors = emailValidate(email);
    if (!isEmpty(errors)) {
      this.showCurrentMessage({
        keys: ['formShow', 'validationShow'],
        message: errors.email,
      });
      return false;
    }
    return true;
  };

  send = async e => {
    e.preventDefault();
    this.showCurrentMessage({ message: null, pending: true });
    const email = this.state.email;
    const valid = this.preValidateForm({ email });
    if (valid) {
      const response = await forgotPasswordRequest({ email });
      const { status, data } = response;
      const shownMessage = status < 300 ? 'successShow' : 'errorShow';
      this.showCurrentMessage({ keys: [shownMessage], message: data });
    }
  };

  modalClose = () => {
    const { onModalClose } = this.props;
    this.showCurrentMessage({ keys: ['formShow'], message: null });
    onModalClose(false);
  };

  onChangeInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const {
      input,
      btn,
      modal,
      form,
      row,
      row_top: rowTop,
      close_modal: closeModal,
      success_message: successMessage,
      error_message: errorMessage,
      big_size_message: bigSizeMessage,
      btn_margin_top_10px: btnMarginTop10,
    } = styles;

    const { pending, message, showNotifications } = this.state;

    const {
      validationShow,
      successShow,
      errorShow,
      formShow,
    } = showNotifications;

    const { modalStatus } = this.props;

    return (
      <Modal
        isOpen={modalStatus}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.onRequestClose}
        className={modal}>
        <FaTimes onClick={this.modalClose} className={closeModal} />
        <ShowMessage classStyle={`${row} ${rowTop}`} condition={formShow}>
          <Form className={form}>
            <Input
              className={input}
              placeholder="Enter Email"
              name="forgot-password-id"
              id="forgot-password-id"
              type="email"
              onChange={this.onChangeInput}
              required
            />
            <ShowMessage classStyle={errorMessage} condition={validationShow}>
              {message}
            </ShowMessage>
            <Button
              className={`${btn} ${btnMarginTop10}`}
              type="submit"
              onClick={this.send}>
              Send
            </Button>
          </Form>
        </ShowMessage>
        <ShowMessage classStyle={`${row} ${rowTop}`} condition={pending}>
          <Spinner loading={pending} />
        </ShowMessage>
        <ShowMessage
          classStyle={`
              ${row} ${rowTop} ${successMessage} ${bigSizeMessage}`}
          condition={successShow}>
          <IoIosCheckmarkCircle hidden={!successShow} />
          {message}
        </ShowMessage>
        <ShowMessage
          classStyle={`
              ${row} ${rowTop} ${errorMessage} ${bigSizeMessage}`}
          condition={errorShow}>
          {message}
        </ShowMessage>
      </Modal>
    );
  }
}

ForgotPassword.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ForgotPassword;
