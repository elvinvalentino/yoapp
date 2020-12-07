import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import * as styles from './profileModal.styles';
import Modal from '../Modal';
import Button from '../Button';
import unknownProfile from '../../assets/unknownProfile.jpg';
import { closeProfileModal } from '../../redux/actions/profileModalAction';
import { logout } from '../../redux/actions/authAction';

const ProfileModal = () => {
  const { selectedUser } = useSelector(state => state.profileModal);
  const { user } = useSelector(state => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const theme = useTheme();

  const handleClose = () => dispatch(closeProfileModal());

  const handleOpenConfirm = () => {
    const isLogout = window.confirm('Are you sure to log out from this app?')
    if (!isLogout) return;
    handleClose();
    dispatch(logout());
    history.push('/signin');
  }

  return (
    <Modal className='profile-modal' handleClose={handleClose}>
      <img className={styles.imgProfile} src={unknownProfile} alt="Unknown Profile" />
      <div className={styles.row}>
        <label className={styles.label(theme)}>Username</label>
        <h4 className={styles.text}>{selectedUser.username}</h4>
      </div>
      <div className={styles.row}>
        <label className={styles.label(theme)}>Email</label>
        <h4 className={styles.text}>{selectedUser.email}</h4>
      </div>
      {selectedUser.id === user.id && (
        <Button className={styles.button} onClick={handleOpenConfirm}>Logout</Button>
      )}
    </Modal>
  )
}

export default ProfileModal;
