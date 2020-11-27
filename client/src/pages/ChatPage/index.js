import React from 'react';

import ChatLeftContent from '../../components/ChatLeftContent';
import ChatRightContent from '../../components/ChatRightContent';
import * as styles from './chatPage.styles';

const Chat = () => {
  return (
    <div className={styles.root}>
      <ChatLeftContent />
      <ChatRightContent />
    </div>
  )
}

export default Chat;
