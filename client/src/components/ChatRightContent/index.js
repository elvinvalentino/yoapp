import React from 'react';
import { useSelector } from 'react-redux';

import * as styles from './chatRightContent.styles';
import NoSelectedUser from "../NoSelectedUser";
import ChatRoom from "../ChatRoom";

const ChatRightContent = () => {
  const { selectedUser } = useSelector(state => state.chat);

  return (
    <div className={styles.root}>
      {selectedUser ?
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
