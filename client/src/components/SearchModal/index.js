import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';

import Modal from '../Modal';
import { closeSearchModal } from '../../redux/actions/searchModalAction';
import { GET_USERS } from '../../graphql/Querys/userQuery';
import UserProfile from '../UserProfile';
import Loader from '../Loader';
import { setSelectedUser } from '../../redux/actions/chatAction';

const SearchModal = () => {
  const [value, setValue] = useState('');
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();

  const { data, loading } = useQuery(GET_USERS);

  const users = data && data.users;

  const handleOnChange = e => setValue(e.target.value);

  const handleClose = () => dispatch(closeSearchModal());

  const handleOnClick = userData => {
    dispatch(setSelectedUser(userData))
    handleClose();
  };

  const styles = {
    input: css`
      width: 100%;
      margin: .8em 0;
      padding: .7em 1.2em;
      border-radius: 25px;
      border: unset;
      background: ${theme.color.secondary.light};
      font-size: 1em;
      color: ${theme.color.primary.dark};

      &::placeholder {
        color: ${theme.color.secondary.dark};
      }
    `,
    userProfileWrapper: css`
      overflow: auto;
      max-height: calc(95vh - 125px);
    `,
    userProfile: css`
      border-bottom: 1px solid #9E8B99;
      cursor: pointer;
      height: 70px;

      &:last-child{
        border-bottom: unset;
      }

      &:hover {
        background: #f9f9f9;
      }
    `,
    span: css`
      color: #9E8B99;
    `
  }

  return (
    <Modal className='search-modal' handleClose={handleClose}>
      <input
        className={styles.input}
        placeholder="Search user..."
        type="text"
        value={value}
        onChange={handleOnChange}
      />
      {loading && <Loader />}
      <div className={styles.userProfileWrapper}>
        {users && users.filter(u => (u.id !== user.id) && (u.username.match(value) || u.email.match(value))).map(u => (
          <UserProfile
            key={u.id}
            pinkText
            username={u.username}
            email={u.email}
            className={styles.userProfile}
            onClick={() => handleOnClick(u)}
          />
        ))}
        {users && users.filter(u => (u.id !== user.id) && (u.username.match(value) || u.email.match(value))).length === 0 && (
          <span className={styles.span}>No user found with username or email of "{value}"</span>
        )}
      </div>
    </Modal>
  )
}

export default SearchModal;
