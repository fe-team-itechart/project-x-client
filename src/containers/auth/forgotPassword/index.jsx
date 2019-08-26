/**
 * TODO: import prop-types package
 */
// import PropTypes from 'prop-types'
import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import styles from './styles.module.scss';
import { forgotPasswordRequest } from '../../../services/auth';
import validateAuth from '../../../validation/auth';
import Spinner from '../../../components/spinner/index';

Modal.setAppElement('#root');

class ForgotPassword extends PureComponent {
  state = {
    status: null,
    data: null,
    email: null,
    message: null,
    pending: false,
  };

  refInput = React.createRef();

  send = async email => {
    const errors = validateAuth({ email });
    this.setState({
      pending: true,
    });
    const response = !errors.email && (await forgotPasswordRequest({ email }));
    const { data, status } = !errors.email && response;
    let answer =
      !errors.email &&
      this.setState({
        status,
        data,
      });
    answer =
      errors.email &&
      this.setState({
        message: errors.email,
      });
    this.setState({
      pending: false,
    });
    return answer;
  };

  onChangeInput = () => {
    const email = this.refInput.current.value;
    this.setState({
      email,
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

  render() {
    const {
      input,
      btn,
      modal,
      form,
      row,
      rowFlexEnd,
      rowTop,
      closeModal,
      successMessage,
      errorMessage,
      big_size_message,
    } = styles;

    const { status, data, email, message, pending } = this.state;

    const { modalStatus, onModalClose } = this.props;

    return (
      <Modal
        isOpen={modalStatus}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={() => {
          onModalClose(false);
        }}
        className={modal}>
        <FaTimes
          onClick={() => {
            this.onCloseModalSetDefault();
            onModalClose(false);
          }}
          className={closeModal}
        />
        <form className={form}>
          {(!status) && (!pending) && (
            <div className={`${row} ${rowTop}`}>
              <input
                type="email"
                name="forgotPassWordEmail"
                id="forgotPassWordEmail"
                className={input}
                ref={this.refInput}
                placeholder="Enter email"
                onChange={this.onChangeInput}
                onInput={() =>
                  this.setState({
                    message: null,
                  })
                }
                required
              />
              <br />
              <p className={`${errorMessage} `}>{!!message && message}</p>
            </div>
          )}
          {
            (pending) && (
              <div className={`${row} ${rowTop}`}>
                <Spinner />
              </div>
            )
          }
          {status < 300 && (
            <>
              <div className={`${row} ${rowTop} ${successMessage} ${big_size_message}`}>
                <IoIosCheckmarkCircle hidden={!status} />
                {data}
              </div>
            </>
          )}
          {status >= 300 && (
            <>
              <div className={`${row} ${rowTop} ${errorMessage} ${big_size_message}`}>{data}</div>
            </>
          )}
          <div className={`${row} ${rowFlexEnd}`}>
            <button
              type="submit"
              className={btn}
              onClick={e => {
                e.preventDefault();
                this.send(email);
              }}>
              Push
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

export default ForgotPassword;
