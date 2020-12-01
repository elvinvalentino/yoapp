import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

import * as styles from './chatRoom.styles';
import UserProfile from '../UserProfile';
import Messages from '../Messages';

const ChatRoom = () => {
  const { selectedUser } = useSelector(state => state.chat);
  const theme = useTheme();
  return (
    <>
      <UserProfile
        className={styles.userProfile(theme)}
        username={selectedUser.username}
        email={selectedUser.email}
      />
      <Messages />
    </>
  )
}

export default ChatRoom
