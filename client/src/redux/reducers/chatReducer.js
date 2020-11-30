import { SET_CHAT_LIST, SET_SELECTED_ROOM } from '../constants';

const initialState = {
  chatList: [],
  selectedRoom: null
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_LIST:
      return {
        ...state,
        chatList: action.payload
      }
    case SET_SELECTED_ROOM:
      const selectedRoom = state.chatList.find(chatRoom => chatRoom.id === action.payload);
      return {
        ...state,
        selectedRoom
      }
    default:
      return state
  }
}

export default chatReducer;