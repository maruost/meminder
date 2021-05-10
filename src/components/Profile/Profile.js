import React, { useState, useEffect } from "react";
import {
  Route,
  useRouteMatch,
  Link,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMemes from "./ProfileMemes/ProfileMemes";
import "./profile.css";
import ProfileTabs from "./ProfileTabs/ProfileTabs";

const userInfoDB = {
  _id: "dgdgdgd111",
  email: "msmsmsmsm@ya.ru",
  name: "Maria Ostapenko",
  memes: [
    "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=331a1bc4f5d7a96a6131f4f142065662",
    "https://pbs.twimg.com/media/DtBjcBUWkAEW4bt.jpg:large",
  ],
};

function Profile({ ...props }) {
  const { url, path } = useRouteMatch();
  const handleBackButton = (path) => {
    props.onHandleBackButton(path);
  };
  useEffect(() => {
    handleBackButton("/");
    return () => {
      handleBackButton(null);
    };
  }, []);
  console.log(url, path);
  return (
    <section className="profile">
      <div className="profile__panel">
        <ProfileTabs />
      </div>
      <Switch>
        <Route path={`${path}/memes`}>
          <ProfileMemes />
        </Route>
        <Route exact path={`${path}`}>
          <ProfileInfo />
        </Route>
        <Route path={`${path}/settings`}>
          <ProfileSettings onHandleLoginFalse={props.onHandleLoginFalse} />
        </Route>
      </Switch>
    </section>
  );
}

export default Profile;
