import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/css';

import { useMessageQueryAndSubs } from '../../hooks'
import Message from '../Message';
import Messageinput from '../MessageInput';
import Loader from '../Loader';

const Messages = () => {
  const { loading, messages } = useMessageQueryAndSubs();
  const messagesEl = useRef();


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
    `
  }

  if (loading) return <Loader />;

  return (
    <div className={styles.root}>
      <div ref={messagesEl} className={styles.messageContainer}>
        <div className={styles.messageWrapper}>
          {messages && messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      <Messageinput />
    </div>
  )
}

export default Messages;
