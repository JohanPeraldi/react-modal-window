import React from 'react';
import styles from './ModalWindow.module.css';

function ModalWindow({ handleCloseModal, message }) {
  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <div className={styles['modal-content']}>
          <span className={styles.close} onClick={handleCloseModal}></span>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
