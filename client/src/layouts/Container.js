import React from 'react'
import { css } from '@emotion/css'
import PropTypes from 'prop-types';

const Container = ({
  children,
  flex,
  justifyContent,
  alignItems,
  direction,
  flexWrap,
  style,
}) => {
  const className = css`
    max-width: 1200px;
    margin: 0 auto;
    display: ${flex ? 'flex' : 'block'};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${direction ? direction : 'row'};
    flex-wrap: ${flexWrap};
    @media (max-width: 1280px){
      padding: 0 4em
    }

    @media (max-width: 600px){
      padding: 0 1.5em
    }

    @media (max-width: 1024px){
      flex-direction: ${direction ? direction : 'column'}
    }
  `;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'no-wrap'
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.bool,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  style: PropTypes.object
}

export default Container;
