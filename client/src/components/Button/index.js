import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { css, cx } from '@emotion/css';

const Button = ({
  outlined,
  children,
  big,
  mobileFluid,
  fluid,
  gutterBottomMobile,
  gutterBottom,
  gutterRightMobile,
  gutterRight,
  style,
  className,
  onClick,
  isLoading
}) => {
  const theme = useTheme();

  const btnStyle = css`
    padding: ${big ? '1em 2em' : '.5em 1.2em'};
    font-weight: 400;
    transition: 500ms;
    border-radius: 50px;
    margin-bottom: ${gutterBottom ? '0.8em' : ''};
    margin-right: ${gutterRight ? '0.5em' : 'auto'};
    font-size: 1em;
    cursor: pointer;
    font-family: 'Saira', sans-serif;
    width: ${fluid ? '100%' : 'auto'};
    @media (max-width: 700px){
      width: ${mobileFluid ? '100%' : 'auto'};
      margin-bottom: ${gutterBottomMobile ? '0.5em' : ''};
      margin-right: ${gutterRightMobile ? '0.5em' : ''};
      padding: ${big ? '1em 2em' : '0.8em'};
    }
  `;

  const btnPrimary = css`
    border: 1px solid ${!isLoading ? theme.color.primary.dark : theme.color.secondary.dark};
    background-color: ${!isLoading ? theme.color.primary.dark : theme.color.secondary.dark};
    color: #fff;
    &:hover{
      background-color: ${theme.color.primary.light};
    }
  `;

  const btnOutlinePrimary = css`
    border: 1px solid ${theme.color.primary.dark};
    color: ${theme.color.primary.dark};
    background-color: transparent;
    &:hover{
      background-color: ${theme.color.primary.dark};
      color: #fff;
    }
  `;

  const classNameRoot = cx(
    btnStyle,
    className,
    {
      [btnPrimary]: !outlined,
      [btnOutlinePrimary]: outlined
    }
  )

  return (
    <button style={style} className={classNameRoot} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  outlined: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  big: PropTypes.bool,
  mobileFluid: PropTypes.bool,
  fluid: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  gutterBottomMobile: PropTypes.bool,
  gutterRight: PropTypes.bool,
  gutterRightMobile: PropTypes.bool,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool
}

export default Button;
