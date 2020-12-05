import { combineReducers } from 'redux';
import flashMessage from './flashMessageReducer';
import auth from './authReducer';
import chat from './chatReducer';
import searchModal from './searchModalReducer';

export default combineReducers({
  flashMessage,
  auth,
  chat,
  searchModal
});