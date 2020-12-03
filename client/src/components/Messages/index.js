import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/css';

import { useMessageQueryAndSubs } from '../../hooks'
import Message from '../Message';
import Messageinput from '../MessageInput';

const Messages = () => {
  const { messages, loading } = useMessageQueryAndSubs();
  const messagesEl = useRef();

  const scrollToBottom = () => {
    const scroll = messagesEl.current.scrollHeight - messagesEl.current.clientHeight;
    messagesEl.current.scrollTo(0, scroll);
  }

  useEffect(() => {
    if (messages) {
      scrollToBottom();
    }
  }, [messages])

  const styles = {
    root: css`
      display: flex;
      flex-direction: column;
      height: calc(100vh - 70px);
    `,
    messageWrapper: css`
      padding: 0 1em;
      overflow-y: auto;
      flex: 1;
      max-height: calc(100vh - 120px);
    `
  }

  return (
    <div className={styles.root}>
      <div ref={messagesEl} className={styles.messageWrapper}>
        {loading && 'loading...'}
        {messages && messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        {messages && messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        {messages && messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        {messages && messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        {messages && messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <Messageinput />
    </div>
  )
}

export default Messages;
