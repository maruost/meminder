import React from "react";
import { Typography } from "@material-ui/core";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import Step3 from "./Step3";
import "./registration.css";
import s from "./registration.module.scss";

function Registration({ onHandleLogin, ...props }) {
  const { path, url } = useRouteMatch();
  return (
    <div className={s.registration}>
      <h2 className={s.description}>Создай аккаунт, чтобы свайпать мемы</h2>
      <Switch>
        <Route exact path={`${path}`}>
          <Step1 url={url} />
        </Route>
        <Route path={`${path}/step2`}>
          <Step2 url={url} />
        </Route>
        <Route path={`${path}/step3`}>
          <Step3 url={url} onHandleLogin={onHandleLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default Registration;
