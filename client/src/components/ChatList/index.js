import React from 'react';
import { css } from '@emotion/css';

import ChatListItem from '../ChatListItem';

const ChatList = () => {
  const styles = {
    root: css`
      max-height: calc(100vh - 70px);
      overflow: auto;
    `
  }
  return (
    <div className={styles.root}>
      <ChatListItem username="Derrick" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
      <ChatListItem username="RickyLuu" message="hai" time="10:10" />
    </div>
  )
}

export default ChatList;
