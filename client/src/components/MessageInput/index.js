import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@emotion/react';

import * as styles from './messageInput.styles';
import { SEND_MESSAGE } from '../../graphql/Mutations/ChatMutation';


const MessageInput = () => {
  const [body, setBody] = useState('');
  const { selectedUser } = useSelector(state => state.chat);

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    variables: {
      userId: selectedUser.id,
      body
    },
    onError: err => console.log(err)
  })

  const theme = useTheme();

  const handleOnChange = e => setBody(e.target.value);

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!body) return;

    sendMessage();
    setBody('');
  }

  return (
    <form className={styles.root} onSubmit={handleOnSubmit}>
      <input
        className={styles.input(theme)}
        placeholder="Type a message..."
        type="text"
        value={body}
        onChange={handleOnChange}
      />
      <button className={styles.iconWrapper(theme)}>
        <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} />
      </button>
    </form>
  )
}

export default MessageInput;
