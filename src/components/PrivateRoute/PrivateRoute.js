import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../View/View';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedinUser] = useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedinUser.loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;