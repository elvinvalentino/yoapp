import { USER_LOGIN, USER_LOGOUT, AUTHENTICATION_ERROR } from '../constants';

export const login = userData => {
  localStorage.setItem('token', userData.token);
  return {
    type: USER_LOGIN,
    payload: userData
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: USER_LOGOUT
  }
}

export const authError = () => {
  localStorage.removeItem('token');
  return {
    type: AUTHENTICATION_ERROR
  }
}