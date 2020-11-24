import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { css, cx, keyframes } from '@emotion/css';
import { useSelector, useDispatch } from 'react-redux';

import { CLOSE_FLASH_MESSAGE } from '../../redux/constants';

const Flash = () => {
  const { isOpen, message, isAnimated } = useSelector(state => state.flashMessage);
  const dispatch = useDispatch();
  const theme = useTheme();
  const animation = {
    fadeIn: keyframes`
      from{
        opacity: 0;
        transform: scale(0.8);
      }

      to{
        opacity: 1;
        transform: scale(1);
      }
    `,
    fadeOut: keyframes`
      from{
        opacity: 1;
        transform: scale(1);
      }

      to{
        opacity: 0;
        transform: scale(0.8);
      }
    `,
  }
  const classNames = {
    root: css`
      position: absolute;
      left: 1em;
      bottom: 1em;
      padding: 1em 3em;
      opacity: 0;
      transform: scale(0.8);
      border-radius: 7px;
      background: ${theme.color.primary.dark};
      color: #fff;
    `,
    fadeIn: css`
      animation: ${animation.fadeIn} 300ms ease-in forwards;
    `,
    fadeOut: css`
      animation: ${animation.fadeOut} 300ms ease-in forwards;
    `
  }

  useEffect(() => {
    isOpen && setTimeout(() => dispatch({ type: CLOSE_FLASH_MESSAGE }), 4000)
  }, [dispatch, isOpen]);

  return (
    <div
      className={cx(classNames.root, {
        [classNames.fadeIn]: isOpen,
        [classNames.fadeOut]: !isOpen && isAnimated
      })}
    >
      {message}
    </div>
  )
}

export default Flash;