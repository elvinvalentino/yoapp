import React from 'react';
import { css, cx } from '@emotion/css';

import unknownProfile from '../../assets/unknownProfile.jpg';

const UserProfile = ({ className, username, email }) => {

  const styles = {
    root: css`
      display: flex;
      align-items: center;
      flex: 1;
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
      color: #fff;
      letter-spacing: .025em;
    `,
    username: css`
      font-weight: 700;
      font-size: 1.2em;
      margin-bottom: .1em;
    `,
    email: css`
      font-weight: 400;
      font-size: .85em;
    `
  }

  return (
    <div className={cx(styles.root, className)}>
      <img className={styles.profileImage} src={unknownProfile} alt="unknown profile" />
      <div className={styles.profile}>
        <span className={styles.username}>{username}</span>
        <span className={styles.email}>{email}</span>
      </div>
    </div>
  )
}

export default UserProfile;
