import { CREATE_FLASH_MESSAGE, CLOSE_FLASH_MESSAGE } from '../constants';

export const createFlashMessage = message => ({
  type: CREATE_FLASH_MESSAGE,
  payload: message
})

export const closeFlashMessage = () => ({
  type: CLOSE_FLASH_MESSAGE,
})