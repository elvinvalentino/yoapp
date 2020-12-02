import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { css } from '@emotion/css';

import { GET_MESSAGES } from '../../graphql/Querys/chatQuery';
import { setMessages } from '../../redux/actions/chatAction';
import Message from '../Message';
import Messageinput from '../MessageInput';

const Messages = () => {
  const { selectedUser, chatRooms } = useSelector(state => state.chat);
  const [getMessage, { data, loading }] = useLazyQuery(GET_MESSAGES, {
    variables: {
      userId: selectedUser.id
    },
    onError: err => console.log(err)
  });
  const dispatch = useDispatch();

  const messagesEl = useRef();
  const messages = chatRooms.find(chatRoom => chatRoom.from.id === selectedUser.id).messages;

  const scrollToBottom = () => {
    const scroll = messagesEl.current.scrollHeight - messagesEl.current.clientHeight;
    messagesEl.current.scrollTo(0, scroll);
  }

  useEffect(() => {
    if (!messages) {
      getMessage();
    }
  }, [messages, getMessage]);

  useEffect(() => {
    if (data) {
      dispatch(setMessages(data.messages));
    }
  }, [data, dispatch]);

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
