import React from 'react';
import { css } from '@emotion/css';

import Button from '../../components/Button';
import Mail from '../../assets/mail.svg';

const NoChatList = () => {
  const styles = {
    root: css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    text: css`
      font-size: 1.3em;
      color: #a4a4a4;
    `,
    img: css`
      width: 50%;
      margin: 3.5em 0;
    `,
    button: css`
      margin-right: unset;
      font-family: 'roboto', sans-serif;
      padding: .7em 2em;

      @media (max-width: 700px){
        padding: .7em 2em;
      }
    `
  }
  return (
    <div className={styles.root}>
      <span className={styles.text}>No Messages, yet</span>
      <img className={styles.img} src={Mail} alt="No Messages" />
      <Button className={styles.button}>Start a conversation</Button>
    </div>
  )
}

export default NoChatList;
