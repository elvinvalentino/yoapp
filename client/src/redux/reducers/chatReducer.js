import { SET_CHAT_ROOM, SET_SELECTED_USER, SET_MESSAGES } from '../constants';

const initialState = {
  chatRooms: [],
  selectedUser: null
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_ROOM:
      return {
        ...state,
        chatRooms: action.payload
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      }
    case SET_MESSAGES:
      const chatRooms = [...state.chatRooms];
      const index = state.chatRooms.findIndex(room => room.id === action.payload.id);
      chatRooms[index] = {
        ...chatRooms[index],
        messages: action.payload.messages
      };
      return {
        ...state,
        chatRooms
      }
    default:
      return state;
  }
}

export default chatReducer;