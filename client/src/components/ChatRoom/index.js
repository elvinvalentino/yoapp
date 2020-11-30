import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

import * as styles from './chatRoom.styles';
import UserProfile from '../UserProfile';
import Messages from '../Messages';

const ChatRoom = () => {
  const { selectedRoom } = useSelector(state => state.chat);
  const theme = useTheme();
  return (
    <>
      <UserProfile
        className={styles.userProfile(theme)}
        username={selectedRoom.from.username}
        email={selectedRoom.from.email}
      />
      <Messages />
    </>
  )
}

export default ChatRoom
