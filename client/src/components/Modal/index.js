import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@emotion/react';

import * as styles from './modal.styles';

const Modal = ({ children, handleClose, className }) => {
  const theme = useTheme();

  return (
    <div className={className}>
      <span className={styles.overlay} onClick={handleClose}></span>
      <div className={styles.modal}>
        <div className={styles.closeIconWrapper}>
          <FontAwesomeIcon className={styles.closeIcon(theme)} icon={faTimes} onClick={handleClose} />
        </div>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  handleClose: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default Modal;
