import jwtDecode from 'jwt-decode';

import { AUTHENTICATION_ERROR, USER_LOGIN, USER_LOGOUT } from '../constants';

let initialState = {
  user: null,
  isAuthenticated: Boolean(localStorage.getItem('token'))
}

if (initialState.isAuthenticated) {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);

  if (decodedToken.exp * 1000 < Date.now()) {
    initialState.isAuthenticated = false;
    localStorage.removeItem('token');
  } else {
    initialState.user = decodedToken;
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case USER_LOGOUT:
    case AUTHENTICATION_ERROR:
      return {
        user: null,
        isAuthenticated: false
      }
    default:
      return state;
  }
}

export default authReducer;