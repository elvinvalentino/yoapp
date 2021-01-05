import { combineReducers } from 'redux';
import flashMessage from './flashMessageReducer';
import auth from './authReducer';
import chat from './chatReducer';
import searchModal from './searchModalReducer';
import profileModal from './profileModalReducer';

export default combineReducers({
  flashMessage,
  auth,
  chat,
  searchModal,
  profileModal
});