import { SET_CHAT_LIST, SET_SELECTED_ROOM } from '../constants';

export const setChatList = chatList => ({
  type: SET_CHAT_LIST,
  payload: chatList
});

export const setSelectedRoom = roomId => ({
  type: SET_SELECTED_ROOM,
  payload: roomId
})

