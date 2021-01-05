import { CLOSE_PROFILE_MODAL, OPEN_PROFILE_MODAL } from "../constants";

const initialState = {
  isOpen: false,
  selectedUser: null
}

const profileModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PROFILE_MODAL:
      return {
        ...state,
        isOpen: true,
        selectedUser: action.payload
      }
    case CLOSE_PROFILE_MODAL:
      return {
        ...state,
        isOpen: false,
        selectedUser: null
      }
    default:
      return state;
  }
}

export default profileModalReducer;