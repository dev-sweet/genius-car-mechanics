import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    console.log(isLoading);
    if(isLoading){
        return <div className="pt-5 mt-5 text-center">
            <Spinner animation="border" variant="secondary" />
        </div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>{
           return user.email ? (
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
          
        }
      />
    );
};

export default PrivateRoute;