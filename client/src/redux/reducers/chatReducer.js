import { SET_CHAT_ROOM, SET_SELECTED_USER, SET_MESSAGES, SET_NEW_MESSAGE, USER_LOGOUT } from '../constants';

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
      index = state.chatRooms.findIndex(room => room.from.id === action.payload.from.id);
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
      if (index !== -1) {
        if (chatRooms[index].hasOwnProperty('messages')) {
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
      } else {
        return {
          ...state,
          chatRooms: [action.payload, ...chatRooms]
        }
      }
      return {
        ...state,
        chatRooms: [
          chatRooms[index],
          ...chatRooms.filter(room => room.from.id !== action.payload.from.id)
        ]
      }
    case USER_LOGOUT:
      return {
        ...state,
        chatRooms: [],
        selectedUser: null
      }
    default:
      return state;
  }
}

export default chatReducer;