import React from 'react';
import { css } from '@emotion/css';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import ChatListItem from '../ChatListItem';
import { GET_CHAT_LIST_QUERY } from '../../graphql/Querys/chatQuery';
import { setChatRooms } from '../../redux/actions/chatAction';
import NoChatList from '../NoChatList';

const ChatList = () => {
  const { chatRooms } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const { loading } = useQuery(GET_CHAT_LIST_QUERY, {
    fetchPolicy: "network-only",
    onCompleted: ({ chatList: chatRooms }) => dispatch(setChatRooms(chatRooms)),
    onError: err => console.error(err),
  });

  const styles = {
    root: css`
      max-height: calc(100vh - 70px);
      overflow: auto;
      position: relative;
      height: 100%;
    `
  }

  if (loading) return <h1>loading</h1>

  return (
    <div className={styles.root}>
      {chatRooms.length > 0 ?
        chatRooms.filter(chatRoom => chatRoom.lastMessage).map(chatRoom => (
          <ChatListItem
            key={chatRoom.id}
            user={chatRoom.from}
            message={chatRoom.lastMessage.body}
            time={moment.unix(chatRoom.lastMessage.createdAt / 1000).format('L')}
          />
        ))
        :
        (
          <NoChatList />
        )}
    </div>
  )
}

export default ChatList;
