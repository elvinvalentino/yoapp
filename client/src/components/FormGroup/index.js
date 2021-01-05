import React from 'react';
import { css } from '@emotion/css';
import PropTypes from 'prop-types';

const FormGroup = ({ children }) => {
  const style = css`
    margin-bottom: 2em;
    position: relative;
  `;
  return (
    <div className={style}>
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default FormGroup;
