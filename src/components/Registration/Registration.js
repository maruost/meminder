import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Step1 } from "../Step1";
import { Step2 } from "../Step2";

function Registration() {
  const { path, url } = useRouteMatch();
  return (
    <div className="registration">
      <h2 className="registration__subscription">
        Чтобы свайпать мемы нужно авторизоваться. Создай аккаунт или выполни
        вход
      </h2>
      <Switch>
        <Route exact path={path}>
          <Step1 url={url} />
        </Route>
        <Route exact path="/step2">
          <Step2 />
        </Route>
      </Switch>
    </div>
  );
}

export default Registration;
