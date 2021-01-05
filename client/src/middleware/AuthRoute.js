import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ?
          (
            <Component {...props} />
          )
          :
          (
            <Redirect to="/chat" />
          )
      } />
  )
}

export default AuthRoute;