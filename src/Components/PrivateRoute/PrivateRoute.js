import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Redirect, Route } from "react-router";
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  //refresh handle
  if (isLoading) {
    return "Loading Page";
  }

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
