import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import * as styles from './chatLeftContent.styles';
import UserProfile from '../UserProfile';
import ChatList from '../ChatList';
import { openSearchModal } from '../../redux/actions/searchModalAction';

const ChatLeftContent = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <div className={styles.root}>
      <div className={styles.userProfileWrapper(theme)}>
        <UserProfile
          username={user.username}
          email={user.email}
        />
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faSearch}
          onClick={() => dispatch(openSearchModal())}
        />
      </div>
      <ChatList />
    </div>
  )
}

ChatLeftContent.propTypes = {
  className: PropTypes.string
}

export default ChatLeftContent;
