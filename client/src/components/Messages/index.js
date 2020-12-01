import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { css } from '@emotion/css';

import { GET_MESSAGES } from '../../graphql/Querys/chatQuery';
import { setMessages } from '../../redux/actions/chatAction';
import Message from '../Message';

const Messages = () => {
  const { selectedUser, chatRooms } = useSelector(state => state.chat);
  const [getMessage, { data, loading }] = useLazyQuery(GET_MESSAGES, {
    variables: {
      userId: selectedUser.id
    },
    onError: err => console.log(err)
  });
  const dispatch = useDispatch();

  const messages = chatRooms.find(chatRoom => chatRoom.from.id === selectedUser.id).messages;

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

  const styles = {
    root: css`
      padding: 0 1em;
    `
  }

  return (
    <div className={styles.root}>
      {loading && 'loading...'}
      {messages && messages.map(message => (
        <Message message={message} />
      ))}
    </div>
  )
}

export default Messages;
