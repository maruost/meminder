import React from "react";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import Chats from "./Chats/Chats";
import ChatScreen from "./ChatScreen/ChatScreen";
import Matches from "./Matches/Matches";
import s from "./chatsPage.module.scss";

function ChatsPage({ ...props }) {
  const { path } = useRouteMatch();
  return (
    <section className={s.chats}>
      <Switch>
        <Route exact path={path}>
          <>
            <Matches />
            <Chats {...props} />
          </>
        </Route>
        <Route path={`${path}/:person`}>
          <ChatScreen {...props} />
        </Route>
      </Switch>
    </section>
  );
}

export default ChatsPage;
