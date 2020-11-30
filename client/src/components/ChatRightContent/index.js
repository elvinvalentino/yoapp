import React from 'react';
import { useSelector } from 'react-redux';

import * as styles from './chatRightContent.styles';
import NoSelectedUser from "../NoSelectedUser";
import ChatRoom from "../ChatRoom";

const ChatRightContent = () => {
  const { selectedRoom } = useSelector(state => state.chat);

  return (
    <div className={styles.root}>
      {selectedRoom ?
        (
          <ChatRoom />
        )
        :
        (
          <NoSelectedUser />
        )}
    </div>
  )
}

export default ChatRightContent;
