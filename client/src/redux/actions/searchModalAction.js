import { OPEN_SEARCH_MODAL, CLOSE_SEARCH_MODAL } from '../constants';

export const openSearchModal = () => ({
  type: OPEN_SEARCH_MODAL
});

export const closeSearchModal = () => ({
  type: CLOSE_SEARCH_MODAL
});