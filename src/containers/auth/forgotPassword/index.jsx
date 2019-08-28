import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { CircleSpinner } from 'react-spinners-kit';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { forgotPasswordRequest } from '../../../services/auth';
import validateAuth from '../../../validation/auth';
import ShowMessage from '../showMessage/index';

Modal.setAppElement('#root');

class ForgotPassword extends PureComponent {
  state = {
    status: null,
    data: null,
    email: null,
    message: null,
    pending: false,
  };

  send = async email => {
    const errors = validateAuth({ email });
    this.setState({
      pending: true,
    });
    if (!errors.email) {
      const response = await forgotPasswordRequest({ email });
      const { data, status } = response;
      this.setState({
        status,
        data,
      });
    } else {
      this.setState({
        message: errors.email,
      });
    }
    this.setState({
      pending: false,
    });
  };

  onChangeInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  onCloseModalSetDefault = () => {
    this.setState({
      status: null,
      data: null,
      email: null,
      message: null,
      pending: false,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.send(this.state.email);
  };

  onInput = () =>
    this.setState({
      message: null,
    });

  modalClose = () => {
    this.onCloseModalSetDefault();
    this.props.onModalClose(false);
  };

  onRequestClose = () => {
    this.props.onModalClose(false);
  };

  render() {
    const {
      input,
      btn,
      modal,
      form,
      row,
      row_flex_end: rowFlexEnd,
      row_top: rowTop,
      close_modal: closeModal,
      success_message: successMessage,
      error_message: errorMessage,
      big_size_message: bigSizeMessage,
    } = styles;

    const { status, data, message, pending } = this.state;

    const { modalStatus } = this.props;

    return (
      <Modal
        isOpen={modalStatus}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.onRequestClose}
        className={modal}>
        <FaTimes onClick={this.modalClose} className={closeModal} />
        <form className={form}>
          <ShowMessage
            classStyle={`${row} ${rowTop}`}
            condition={!status && !pending}>
            <input
              type="email"
              name="forgotPassWordEmail"
              id="forgotPassWordEmail"
              className={input}
              placeholder="Enter email"
              onChange={this.onChangeInput}
              onInput={this.onInput}
              required
            />
            <br />
            <ShowMessage classStyle={`${errorMessage} `} condition={message}>
              {message}
            </ShowMessage>
          </ShowMessage>
          <ShowMessage
            classStyle={`${row} ${rowFlexEnd}`}
            condition={!status && !pending}>
            <button type="submit" className={btn} onClick={this.onSubmit}>
              Push
            </button>
          </ShowMessage>
          <ShowMessage classStyle={`${row} ${rowTop}`} condition={pending}>
            <CircleSpinner size={40} color="#fff" loading={pending} />
          </ShowMessage>

          <ShowMessage
            classStyle={`
              ${row} ${rowTop} ${successMessage} ${bigSizeMessage}`}
            condition={status < 300}>
            <IoIosCheckmarkCircle hidden={!status} />
            {data}
          </ShowMessage>
          <ShowMessage
            classStyle={`
              ${row} ${rowTop} ${errorMessage} ${bigSizeMessage}`}
            condition={status >= 300}>
            {data}
          </ShowMessage>
        </form>
      </Modal>
    );
  }
}

ForgotPassword.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ForgotPassword;
