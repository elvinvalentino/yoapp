import { useState, useEffect } from "react";
import { useLazyQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';

import { GET_MESSAGES } from '../graphql/Querys/chatQuery';
import { setMessages } from '../redux/actions/chatAction';

export const useForm = initialState => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  return {
    formData,
    handleOnChange
  };
}

export const useMessageQuery = () => {
  const { selectedUser, chatRooms } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const [getMessage, { data, loading }] = useLazyQuery(GET_MESSAGES, {
    variables: {
      userId: selectedUser.id
    },
    onError: err => console.log(err)
  });

  const messages = chatRooms.find(chatRoom => chatRoom.from.id === selectedUser.id)?.messages;

  useEffect(() => {
    if (!messages) {
      getMessage();
    }
  }, [messages, getMessage]);

  useEffect(() => {
    if (data) {
      dispatch(setMessages(data.messages));
    }
  }, [data, dispatch]);

  return {
    messages,
    loading
  }

}