/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileMemes from "./ProfileMemes/ProfileMemes";
import s from "./profile.module.scss";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import NotFound from "../NotFound/NotFound";

function Profile({ ...props }) {
  const { path } = useRouteMatch();
  const handleBackButton = (path) => {
    props.onHandleBackButton(path);
  };
  useEffect(() => {
    handleBackButton("/");
    return () => {
      handleBackButton(null);
    };
  }, []);
  return (
    <section className={s.profile}>
      <div className={s.panel}>
        <ProfileTabs />
      </div>
      <div className={s.page}>
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
          <Route path={`${path}/*`}>
            <NotFound style={{ flex: 2 }} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Profile;
