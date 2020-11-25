import { combineReducers } from 'redux';
import flashMessage from './flashMessageReducer';
import auth from './authReducer';

export default combineReducers({
  flashMessage,
  auth
});