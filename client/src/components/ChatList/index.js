import React from 'react';
import { css } from '@emotion/css';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import ChatListItem from '../ChatListItem';
import { GET_CHAT_LIST_QUERY } from '../../graphql/Querys/chatQuery';
import { setChatList } from '../../redux/actions/chatAction';
import NoChatList from '../NoChatList';

const ChatList = () => {
  const { chatList } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const { loading } = useQuery(GET_CHAT_LIST_QUERY, {
    fetchPolicy: "network-only",
    onCompleted: ({ chatList }) => dispatch(setChatList(chatList)),
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
      {chatList.length > 0 ?
        chatList.map(chatList => (
          <ChatListItem
            onClick={() => console.log('clicked')}
            key={chatList.id}
            roomId={chatList.id}
            username={chatList.from.username}
            message={chatList.lastMessage.body}
            time={moment.unix(chatList.lastMessage.createdAt / 1000).format('L')}
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
