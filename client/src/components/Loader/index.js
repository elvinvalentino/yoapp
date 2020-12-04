import React from 'react';
import { css, keyframes } from '@emotion/css';
import { useTheme } from '@emotion/react';

const Loader = () => {
  const theme = useTheme();
  const animation = {
    spin: keyframes`
      from{
        transform: rotate(0deg);
      }

      to{
        transform: rotate(360deg);
      }
    `
  }
  const styles = {
    root: css`
      margin: 1em 0;
    `,
    loader: css`
      margin: 0 auto;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid ${theme.color.secondary.dark};
      border-top: 4px solid ${theme.color.primary.dark};
      border-left: 4px solid ${theme.color.primary.dark};
      animation: ${animation.spin} 1000ms linear infinite;
    `
  }
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loader;
