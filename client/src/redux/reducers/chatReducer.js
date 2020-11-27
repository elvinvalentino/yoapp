import { SET_CHAT_LIST } from '../constants';

const initialState = {
  chatList: []
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_LIST:
      return {
        ...state,
        chatList: action.payload
      }
    default:
      return state
  }
}

export default chatReducer;