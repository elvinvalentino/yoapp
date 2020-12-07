import { OPEN_PROFILE_MODAL, CLOSE_PROFILE_MODAL } from '../constants';

export const openProfileModal = user => ({
  type: OPEN_PROFILE_MODAL,
  payload: user
});

export const closeProfileModal = () => ({
  type: CLOSE_PROFILE_MODAL
});