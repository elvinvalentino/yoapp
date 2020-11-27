import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, isOpen }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default Modal;
