import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAut from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,admin,load} = useAut();
    if(load){
        return <CircularProgress />

    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email &&admin? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
    )
}

export default AdminRoute;
