import React, { useEffect } from "react";
import Chat from "../Chat/Chat";
import s from "./chats.module.scss";
import chats from "../../utils/chats";

function Chats({ ...props }) {
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
    <section className={s.chats}>
      <div className={s.items}>
        <h4 className={s.title}>Чаты</h4>
        <div className={s.dialogs}>
          {chats.map((chat) => {
            const name = chat.firstName + " " + chat.lastName;
            const msgLen = chat.messages.length;
            const lastMsg = chat.messages[msgLen - 1].message;
            const timestamp = chat.messages[msgLen - 1].timestamp;
            return (
              <Chat
                id={chat._id}
                name={name}
                avatar={chat.avatar}
                message={lastMsg}
                timestamp={timestamp}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Chats;
