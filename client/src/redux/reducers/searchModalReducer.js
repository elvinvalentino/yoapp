import { OPEN_SEARCH_MODAL, CLOSE_SEARCH_MODAL } from '../constants';

const initialState = {
  isOpen: false
}

const searchModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SEARCH_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case CLOSE_SEARCH_MODAL:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}

export default searchModalReducer;