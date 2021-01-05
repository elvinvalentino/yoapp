import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';

import * as styles from './chatRoom.styles';
import UserProfile from '../UserProfile';
import Messages from '../Messages';
import { openProfileModal } from '../../redux/actions/profileModalAction';

const ChatRoom = () => {
  const { selectedUser } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <>
      <UserProfile
        className={styles.userProfile(theme)}
        username={selectedUser.username}
        email={selectedUser.email}
        imageOnClick={() => dispatch(openProfileModal(selectedUser))}
      />
      <Messages />
    </>
  )
}

export default ChatRoom
