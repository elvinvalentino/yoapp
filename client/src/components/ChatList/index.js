import React from 'react';
import { css } from '@emotion/css';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import ChatListItem from '../ChatListItem';
import { GET_CHAT_LIST_QUERY } from '../../graphql/Querys/chatQuery';
import { setChatList } from '../../redux/actions/chatAction';

const ChatList = () => {
  const { chatList } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const { loading } = useQuery(GET_CHAT_LIST_QUERY, {
    onCompleted: ({ chatList }) => dispatch(setChatList(chatList)),
    onError: err => console.error(err)
  });

  const styles = {
    root: css`
      max-height: calc(100vh - 70px);
      overflow: auto;
    `
  }

  if (loading) return <h1>loading</h1>

  return (
    <div className={styles.root}>
      {chatList.map(chatList => (
        <ChatListItem
          username={chatList.from.username}
          message={chatList.lastMessage.body}
          time={moment.unix(chatList.lastMessage.createdAt / 1000).format('L')} />
      ))}
    </div>
  )
}

export default ChatList;
