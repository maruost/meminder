import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route path={props.path}>
      {() => {
        return props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/welcome-board" />
        );
      }}
    </Route>
  );
};

export default ProtectedRoute;
