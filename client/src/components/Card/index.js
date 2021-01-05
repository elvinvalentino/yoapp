import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@emotion/css';

const Card = ({ children, className }) => {
  const style = css`
    box-shadow: 0px 10px 18px 1px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 3em;
  `;
  return (
    <div className={cx(style, className)}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

export default Card;
