import React from "react";
import { Typography } from "@material-ui/core";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import Step3 from "./Step3";
import "./registration.css";

function Registration({ onHandleLogin, ...props }) {
  const { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="registration">
        <h2 className="registration__subscription">
          Чтобы свайпать мемы нужно авторизоваться. Создай аккаунт или выполни
          вход
        </h2>
        <Switch>
          <Route exact path={path}>
            <Step1 url={url} />
          </Route>
          <Route exact path={`${path}/step2`}>
            <Step2 url={url} />
          </Route>
          <Route exact path={`${path}/step3`}>
            <Step3 url={url} onHandleLogin={onHandleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Registration;
