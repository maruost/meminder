import React, { useState } from "react";
import {
  Route,
  useRouteMatch,
  Link,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import SimpleTabs from "../SimpleTabs/SimpleTabs";
import ProfileSettings from "../ProfileSettings/ProfileSettings";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileMemes from "../ProfileMemes/ProfileMemes";
import "./profile.css";
import ProfileMemeItem from "../ProfileMemeItem/ProfileMemeItem";

const userInfoDB = {
  _id: "dgdgdgd111",
  email: "msmsmsmsm@ya.ru",
  name: "Maria Ostapenko",
  memes: [
    "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=331a1bc4f5d7a96a6131f4f142065662",
    "https://pbs.twimg.com/media/DtBjcBUWkAEW4bt.jpg:large",
  ],
};

function Profile() {
  const { url, path } = useRouteMatch();
  // const data = [
  //   { path: "me", label: "Обо мне" },
  //   { path: "memes", label: "Мои мемы" },
  //   { path: "settings", label: "Настройки" },
  // ];
  return (
      <div className="profile">
        <div className="profile__panel">
          <Link to={`${url}/me`}>
            <p className="profile__link">Обо мне</p>
          </Link>
          <Link to={`${url}/memes`}>
            <p className="profile__link">Обо мне</p>
          </Link>
          <Link to={`${url}/settings`}>
            <p className="profile__link">Обо мне</p>
          </Link>
        </div>
        <Switch>
          <Route path={`${path}/me`}>
            <ProfileInfo />
          </Route>
          <Route path={`${path}/memes`}>
            <ProfileMemes />
          </Route>
          <Route path={`${path}/settings`}>
            <ProfileSettings />
          </Route>
        </Switch>
      </div>
  );
}

export default Profile;
