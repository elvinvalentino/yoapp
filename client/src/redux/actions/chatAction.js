import { SET_CHAT_ROOM, SET_SELECTED_USER, SET_MESSAGES, SET_NEW_MESSAGE } from '../constants';

export const setChatRooms = chatRooms => ({
  type: SET_CHAT_ROOM,
  payload: chatRooms
});

export const setSelectedUser = user => ({
  type: SET_SELECTED_USER,
  payload: user
})

export const setMessages = messages => ({
  type: SET_MESSAGES,
  payload: messages
});

export const setNewMessage = newMessage => ({
  type: SET_NEW_MESSAGE,
  payload: newMessage,
})

