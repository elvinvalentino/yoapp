import { SET_CHAT_ROOM, SET_SELECTED_USER, SET_MESSAGES, SET_NEW_MESSAGE } from '../constants';

const initialState = {
  chatRooms: [],
  selectedUser: null
}

const chatReducer = (state = initialState, action) => {
  const chatRooms = [...state.chatRooms];
  let index;
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
      index = state.chatRooms.findIndex(room => room.id === action.payload.id);
      if (index === -1) {
        chatRooms.push(action.payload)
      } else {
        chatRooms[index] = {
          ...chatRooms[index],
          messages: action.payload.messages
        };
      }

      return {
        ...state,
        chatRooms
      }
    case SET_NEW_MESSAGE:
      index = state.chatRooms.findIndex(room => room.from.id === action.payload.from.id);
      if (state.selectedUser && state.selectedUser.id === action.payload.from.id) {
        chatRooms[index] = {
          ...chatRooms[index],
          lastMessage: action.payload.lastMessage,
          messages: [
            ...chatRooms[index].messages,
            action.payload.lastMessage,
          ]
        };
      } else {
        chatRooms[index] = {
          ...chatRooms[index],
          lastMessage: action.payload.lastMessage,
        };
      }
      return {
        ...state,
        chatRooms: [
          chatRooms[index],
          ...chatRooms.filter(room => room.from.id !== action.payload.from.id)
        ]
      }
    default:
      return state;
  }
}

export default chatReducer;