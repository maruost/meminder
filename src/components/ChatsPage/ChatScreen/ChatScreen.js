import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatMessage from "../ChatMessage/ChatMessage";
import { Send } from "@material-ui/icons/";
import { Button } from "@material-ui/core";
import s from "./chatScreen.module.scss";
import chats from "../../utils/chats";
import moment, { now } from "moment";

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
  let { id } = useParams();
  const userData = chats.find((chat) => chat._id === id);
  const initialMessages = userData.messages;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleBackButton = (path) => {
    props.onHandleBackButton(path);
  };

  useEffect(() => {
    handleBackButton("/chats");
    setMessages(initialMessages);
    return () => {
      handleBackButton(null);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let now = moment().hours() + ":" + moment().minutes();
    const messageToSend = {
      creatorId: "ef234padk",
      timestamp: now,
      message: message,
    };
    setMessages([...messages, messageToSend]);
    setMessage("");
    setIsDisabled(true);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const renderChatMessages = () => {
    if (messages.length !== 0) {
      return messages.map((msg, index) => {
        return (
          <ChatMessage
            className={id === msg.creatorId ? "chatMessage" : "chatUserMessage"}
            message={msg.message}
            timestamp={msg.timestamp}
            firstName={userData.firstName}
            lastName={userData.lastName}
            avatar={id === msg.creatorId ? userData.avatar : null}
            index={index}
          />
        );
      });
    } else {
      return <p className={s["default-message"]}>Сообщений ещё нет...</p>;
    }
  };

  return (
    <div className={s.chatScreen}>
      <div className={s.box}>
        <div className={s.messages}>{renderChatMessages()}</div>
        <form id="sendForm" className={s["send-box"]} onSubmit={handleSubmit}>
          <input
            className={s["send-field"]}
            type="text"
            name="send"
            placeholder="Напиши сообщение..."
            onChange={handleChange}
            value={message}
          />
          <Button variant="outlined" type="submit" disabled={isDisabled}>
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
