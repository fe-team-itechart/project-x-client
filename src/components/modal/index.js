import React from 'react';

import SimpleModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

import styles from './styles.module.scss';

SimpleModal.setAppElement('#root');

export const Modal = ({ open, onClose, children }) => {
  return (
    <SimpleModal
      isOpen={open}
      onRequestClose={onClose}
      className={styles.modal}>
      <FaTimes onClick={onClose} className={styles.closeModal} />
      {children}
    </SimpleModal>
  );
};
