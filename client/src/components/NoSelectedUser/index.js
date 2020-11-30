import React from 'react';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

import Phone from '../../assets/phone.svg';

const NoSelectedUser = () => {
  const { user } = useSelector(state => state.auth);
  const theme = useTheme();

  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 1em;
    `,
    headline: css`
      color: ${theme.color.primary.dark};
      font-family: 'saira', sans-serif;
      font-weight: 600;
      font-size: 2.75em;
      line-height: 100%;
    `,
    img: css`
      margin: 2em 0;
      width: 400px;
    `,
    greeting: css`
      color: ${theme.color.primary.dark};
      font-size: 2.25em;
      font-weight: 500;
      text-transform: uppercase;
    `
  }

  return (
    <div className={styles.root}>
      <span className={styles.headline}>YOAPP</span>
      <img className={styles.img} src={Phone} alt="phone" />
      <span className={styles.greeting}>Hello, {user.username}</span>
    </div>
  )
}

export default NoSelectedUser;
