import { SET_CHAT_LIST } from '../constants';

export const setChatList = chatList => ({
  type: SET_CHAT_LIST,
  payload: chatList
})