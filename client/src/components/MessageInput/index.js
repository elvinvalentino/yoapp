import React from 'react';
import { css } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@emotion/react';


const MessageInput = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      align-items: center;
      height: 60px; 
      padding: 0 1em;
    `,
    input: css`
      flex: 1;
      padding: .7em 1.2em;
      border-radius: 25px;
      border: unset;
      background: ${theme.color.secondary.light};
      height: 45px;
      font-size: 1em;
      color: ${theme.color.primary.dark};

      &::placeholder {
        color: ${theme.color.secondary.dark};
      }
    `,
    iconWrapper: css`
      height: 45px;
      width: 45px;
      background: ${theme.color.primary.dark};
      margin-left: .7em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 50%;
      font-size: 1em;
    `,
    icon: css`
      margin-right: 4px;
    `
  }


  return (
    <div className={styles.root}>
      <input className={styles.input} placeholder="Type a message..." type="text" />
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} />
      </div>
    </div>
  )
}

export default MessageInput;
