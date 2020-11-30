import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

import * as styles from './chatLeftContent.styles';
import UserProfile from '../UserProfile';
import ChatList from '../ChatList';
import SearchModal from '../SearchModal';

const ChatLeftContent = () => {
  const { user } = useSelector(state => state.auth);
  const theme = useTheme();
  return (
    <div className={styles.root}>
      <div className={styles.userProfileWrapper(theme)}>
        <UserProfile
          username={user.username}
          email={user.email}
        />
        <SearchModal className={styles.searchIcon} />
      </div>
      <ChatList />
    </div>
  )
}

ChatLeftContent.propTypes = {
  className: PropTypes.string
}

export default ChatLeftContent;
