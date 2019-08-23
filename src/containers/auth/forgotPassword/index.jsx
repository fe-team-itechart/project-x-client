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

Modal.setAppElement('#root');

class ForgotPassword extends PureComponent {
  state = {
    status: null,
    data: null,
    email: null
  }

  refInput = React.createRef();

  send = async (email) => {
    const response = await forgotPasswordRequest({ email });
    console.log(response);
    const { data, status } = response;
    this.setState({
        status,
        data
      })
  }

  onChangeInput = () => {
    const email = this.refInput.current.value;
    this.setState({
      email
    });
  } 

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
      errorMessage
    } = styles;

    const {
      status,
      data,
      email
    } = this.state;

    const {
      modalStatus,
      onModalClose
    } = this.props;

    return (
      <Modal
        isOpen={modalStatus}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={() => { onModalClose(false); }}
        className={modal}
      >
        <FaTimes onClick={() => { onModalClose(false); }} className={closeModal} />
        <form className={form}>
          {(!status) && (<div className={`${row} ${rowTop}`}>
            <input
              type="email"
              name="forgotPassWordEmail"
              id="forgotPassWordEmail"
              className={input}
              ref={this.refInput}
              placeholder='Enter email'
              onChange={this.onChangeInput}
            />
          </div>)
          }
          {
            (status < 300) && (
            <>
              <div className={`${row} ${rowTop} ${successMessage}`}>
                <IoIosCheckmarkCircle hidden={!status}/>{data}
              </div>
            </>
            )
          }
          {
            (status >= 300) && (
              <>
                <div className={`${row} ${rowTop} ${successMessage}`}>
                  {data}
                </div>
              </>
              )
          }
          <div className={`${row} ${rowFlexEnd}`}>
            <button type='button' className={btn} onClick={() => { this.send(email) }} >Push</button>
          </div>

        </form>

      </Modal>
    );

  }
}

export default ForgotPassword;
