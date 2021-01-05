import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSubscription } from '@apollo/client';

import * as styles from './chatPage.styles';
import ChatLeftContent from '../../components/ChatLeftContent';
import ChatRightContent from '../../components/ChatRightContent';
import { NEW_MESSAGE } from '../../graphql/Subscriptions/chatSubscription';
import { setNewMessage } from '../../redux/actions/chatAction';

const Chat = () => {
  const dispatch = useDispatch();
  const { data: newMessageData, error: newMessageError } = useSubscription(NEW_MESSAGE);

  useEffect(() => {
    if (newMessageError) console.error(newMessageError.graphQLErrors);
    if (newMessageData) {
      dispatch(setNewMessage(newMessageData.newMessage))
    }
  }, [newMessageData, newMessageError, dispatch])

  return (
    <div className={styles.root}>
      <ChatLeftContent />
      <ChatRightContent />
    </div>
  )
}

export default Chat;
