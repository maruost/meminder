import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { Send } from "@material-ui/icons/";
import { IconButton } from "@material-ui/core";
import s from "./chatScreen.module.scss";

const messagesData = {
  name: "John Sallivan",
  _id: "sdfsdfsdfawq",
  avatar: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
  messages: [
    {
      message: "hi, how are you",
      createdAt: "13:23",
      owner: "sdfsdfsdfawq",
    },
    { message: "kek kek ", createdAt: "14:25", owner: "sdfsdfsdfawq" },
    { message: "hi! fine", createdAt: "15:45", owner: "me" },
  ],
};

function ChatScreen({ ...props }) {
  const initailMessages = messagesData.messages;
  const pathArr = window.location.pathname.split("/");
  const id = pathArr[2];
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initailMessages);

  const handleBackButton = (path) => {
    props.onHandleBackButton(path);
  };

  useEffect(() => {
    handleBackButton("/chats");
    return () => {
      handleBackButton(null);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageToSend = {
      message: message,
      cratedAt: "12-12-12",
      owner: "me",
    };
    console.log(messageToSend);
    setMessages([...messages, messageToSend]);
    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={s.chatScreen}>
      <div className={s.box}>
        <div className={s.messages}>
          {messages.map((msg, index) => {
            return (
              <ChatMessage
                className={id === msg.owner ? "chatMessage" : "chatUserMessage"}
                message={msg.message}
                timestamp={msg.messageCreatedAt}
                name={messagesData.name}
                avatar={id === msg.owner ? messagesData.avatar : null}
                index={index}
              />
            );
          })}
        </div>
        <form id="sendForm" className={s["send-box"]} onSubmit={handleSubmit}>
          <input
            className={s["send-field"]}
            type="text"
            name="send"
            placeholder="Напиши сообщение..."
            onChange={handleChange}
            value={message}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
