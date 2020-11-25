import { CREATE_FLASH_MESSAGE, CLOSE_FLASH_MESSAGE } from '../constants';

const initialState = {
  isOpen: false,
  isAnimated: false,
  message: '',
}

const FlashMessageReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_FLASH_MESSAGE:
      return {
        ...state,
        isOpen: true,
        isAnimated: true,
        message: action.payload,
      }
    case CLOSE_FLASH_MESSAGE:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state;
  }
}

export default FlashMessageReducer;