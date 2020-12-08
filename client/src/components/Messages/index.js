import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';

import { useMessageQuery } from '../../hooks';
import { getdateString, messageDateFormat } from '../../utils/dateFormat';
import Message from '../Message';
import Messageinput from '../MessageInput';
import Loader from '../Loader';

const Messages = () => {
  const { loading, messages } = useMessageQuery();
  const messagesEl = useRef();
  const theme = useTheme();
  let prevDate;

  const scrollToBottom = () => {
    const scroll = messagesEl.current.scrollHeight - messagesEl.current.clientHeight;
    messagesEl.current.scrollTo(0, scroll);
  }

  useEffect(() => {
    if (messages && !loading) {
      scrollToBottom();
    }
  }, [messages, loading])

  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      height: calc(100vh - 70px);
    `,
    messageContainer: css`
      padding: 0 1em;
      overflow-y: auto;
      flex: 1;
      max-height: calc(100vh - 120px);
      display: flex;
    `,
    messageWrapper: css`
      width: 100%;
      margin-top: auto;
    `,
    date: css`
      display: block;
      color: ${theme.color.primary.dark};
      text-transform: uppercase;
      margin: 2em 0;
      font-size: .9em;
      text-align: center;
    `
  }

  if (loading) return <Loader />;

  return (
    <div className={styles.root}>
      <div ref={messagesEl} className={styles.messageContainer}>
        <div className={styles.messageWrapper}>
          {console.log('----------------------------')}
          {messages && messages.map(message => {
            const date = getdateString(message.createdAt);
            console.log(date === prevDate)
            if (date !== prevDate) {
              prevDate = getdateString(message.createdAt);
              return (
                <>
                  <span className={styles.date}>{messageDateFormat(message.createdAt)}</span>
                  <Message key={message.id} message={message} />
                </>
              )
            } else {
              prevDate = getdateString(message.createdAt);
              return <Message key={message.id} message={message} />
            }
          })}
        </div>
      </div>
      <Messageinput />
    </div>
  )
}

export default Messages;
