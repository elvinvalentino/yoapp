import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { css, cx } from '@emotion/css';

const Button = ({
  outlined,
  children,
  big,
  mobileFluid,
  gutterBottomMobile,
  gutterBottom,
  gutterRightMobile,
  gutterRight,
  style
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
    @media (max-width: 700px){
      width: ${mobileFluid ? '100%' : 'auto'};
      margin-bottom: ${gutterBottomMobile ? '0.5em' : ''};
      margin-right: ${gutterRightMobile ? '0.5em' : ''};
      padding: ${big ? '1em 2em' : '0.8em'};
    }
  `;

  const btnPrimary = css`
    background-color: ${theme.color.primary.dark};
    color: #fff;
    border: none;
    &:hover{
      background-color: ${theme.color.primary.light};
    }
    ${'' /* & > a{
      text-decoration: none;
      color: #fff;
    } */}
  `;

  const btnOutlinePrimary = css`
    border: 1px solid ${theme.color.primary.dark};
    color: ${theme.color.primary.dark};
    background-color: transparent;
    &:hover{
      background-color: ${theme.color.primary.dark};
      color: #fff;
    }
    ${'' /* & > a{
      text-decoration: none;
      color: ${theme.color.primary.dark};
    }
    & > a:hover{
      color: #fff;
    } */}
  `;

  const className = cx(
    btnStyle, {
    [btnPrimary]: !outlined,
    [btnOutlinePrimary]: outlined
  }
  )

  return (
    <button style={style} className={className}>
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
  gutterBottom: PropTypes.bool,
  gutterBottomMobile: PropTypes.bool,
  gutterRight: PropTypes.bool,
  gutterRightMobile: PropTypes.bool,
}

export default Button;
