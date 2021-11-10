import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAut from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,load} = useAut();
    if(load){
        return <CircularProgress />

    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default PrivateRoute;
