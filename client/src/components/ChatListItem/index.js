import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';

import { setSelectedUser } from '../../redux/actions/chatAction';
import unknownProfile from '../../assets/unknownProfile.jpg';

const ChatListItem = ({ user, message, time }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const styles = {
    root: css`
      display: flex;
      height: 70px;
      padding: 0 .8em;
      align-items: center;
      border-bottom: 1px solid #9E8B99;
      cursor: pointer;

      &:hover {
        background: #f9f9f9;
      }
    `,
    profileImage: css`
      width: 50px;
      height: 50px;
      border-radius: 50%;
    `,
    profile: css`
      display: flex;
      flex-direction: column;
      margin-left: 1em;
      letter-spacing: .01em;
      width: 100%;
    `,
    profileTop: css`
      display: flex;
    `,
    username: css`
      font-weight: 700;
      flex: 1;
      width: 100%;
      font-size: 1.1em;
      margin-bottom: .1em;
      color: ${theme.color.primary.dark};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    message: css`
      font-weight: 400;
      font-size: .85em;
      color: #8A8188;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 250px;
    `,
    time: css`
      font-size: .8em;
      color: #8A8188;
    `
  }

  const handleOnClick = user => dispatch(setSelectedUser(user));

  return (
    <div className={cx(styles.root)} onClick={() => handleOnClick(user)}>
      <img className={styles.profileImage} src={unknownProfile} alt="unknown profile" />
      <div className={styles.profile}>
        <div className={styles.profileTop}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.time}>{time}</span>
        </div>
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  )
}

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default ChatListItem;
