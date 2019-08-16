import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { FaTimes } from 'react-icons/fa';
import { registerRequest } from '../../../actions/auth';
import styles from '../styles.module.scss';
import validateAuth from '../../../validation/auth';

Modal.setAppElement('#root');

class Register extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, email, password, password2 } = this.state;
    const { registerRequest } = this.props;

    const errors = validateAuth({ firstName, lastName, email, password });

    if (!isEmpty(errors)) {
      this.setState({ errors });
    } else if (password !== password2) {
      alert('Password do not match');
    } else {
      this.setState({ errors: {} });
      registerRequest({ firstName, lastName, email, password });
    }
  };

  render() {
    const {
      modalIsOpen,
      firstName,
      lastName,
      email,
      password,
      password2,
      errors,
    } = this.state;
    return (
      <Fragment>
        <button onClick={this.openModal} type="button">
          Sign Up
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className={styles.modal}>
          <FaTimes onClick={this.closeModal} className={styles.closeModal} />
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Sign Up</h2>
          <form onSubmit={this.onSubmit} noValidate>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={this.onChange}
            />
            {errors.firstName && (
              <span className={styles.invalidFeedback}>{errors.firstName}</span>
            )}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={this.onChange}
            />
            {errors.lastName && (
              <span className={styles.invalidFeedback}>{errors.lastName}</span>
            )}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.onChange}
            />
            {errors.email && (
              <span className={styles.invalidFeedback}>{errors.email}</span>
            )}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.onChange}
            />
            {errors.password && (
              <span className={styles.invalidFeedback}>{errors.password}</span>
            )}
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm Password"
              onChange={this.onChange}
            />
            <button type="submit" className={styles.submit}>
              Sign Up
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registerRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
