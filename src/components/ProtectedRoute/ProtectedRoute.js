import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route path={props.path}>
      {() => {
        console.log(props.loggedIn);
        return props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="./welcome-board" />
        );
      }}
    </Route>
  );
};

export default ProtectedRoute;
