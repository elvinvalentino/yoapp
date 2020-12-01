import React from 'react';
import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Message = ({ message }) => {
  const { user } = useSelector(state => state.auth);
  const theme = useTheme();
  const { body, createdAt, userId } = message;

  const styles = {
    root: css`
      margin: .5em 0;
    `,
    rootSelf: css`
      text-align: right;
    `,
    messageWrapper: css`
      position: relative;
      max-width: 45%;
      display: inline-block;
      border: 1px solid ${theme.color.primary.dark};
      padding: .5em 3.2em .5em 1em;
      border-radius: 50px;
      color: ${theme.color.primary.dark};
    `,
    messageWrapperSelf: css`
      background: ${theme.color.primary.dark};
      color: #fff;
    `,
    time: css`
      position: absolute;
      bottom: 3px;
      right: 15px;
      font-size: .7em;
    `
  }
  return (
    <div className={cx(styles.root, { [styles.rootSelf]: userId === user.id })}>
      <div className={cx(styles.messageWrapper, { [styles.messageWrapperSelf]: userId === user.id })}>
        <span>{body}</span>
        <span className={styles.time}>{moment.unix(createdAt / 1000).format('HH:mm')}</span>
      </div>
    </div>
  )
}

export default Message;
