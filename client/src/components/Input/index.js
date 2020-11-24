import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';

const Input = ({ onChange, label, value, type, name, error }) => {
  const theme = useTheme();

  const styles = {
    input: css`
      width: 100%;
      border: none;
      border-bottom: 1px solid #ccc;
      background: transparent;
      padding: .5em 0;
      font-size: 1em;
      margin-top: .4em;
      position: relative;
      transition: 300ms;

      &.focus{
        border-bottom: 1px solid ${theme.color.primary.dark};
      }

      &.focus.error, &.error{
        border-bottom: 1px solid red;
      }

      &.error ~ label {
        color: red;
      }

      &.focus ~ label{
        top: 0;
        font-size: .8em;
        color: ${theme.color.primary.dark};
      }

      &.focus.error ~ label {
        top: 0;
        font-size: .85em;
        color: red;
      }
    `,
    label: css`
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: -999;
      color: #ccc;
      font-size: 1em;
      font-weight: 400;
      transition: 300ms;
    `,
    error: css`
      position: absolute;
      left: 0;
      bottom: -16px;
      font-size: .75em;
      color: red;
    `
  }

  const handleFocus = e => {
    e.target.classList.add('focus');
  }

  const handleBlur = e => {
    if (e.target.value === '')
      e.target.classList.remove('focus');
  }

  return (
    <>
      <input
        className={cx(styles.input, {
          'error': error && Boolean(error[name]),
          'focus': Boolean(value)
        })}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className={styles.label}>{label}</label>
      {error && error[name] && <span className={styles.error}>{error[name]}</span>}
    </>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object
}

export default Input;
