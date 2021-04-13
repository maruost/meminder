import React from "react";
import Chat from "../Chat/Chat";
import "./chats.css";

function Chats({ ...props }) {
  const chatsArray = [
    {
      name: "John Sallivan",
      _id: "sdfsdfsdfawq",
      message: "hey yo",
      timestamp: "2 sec ago",
      avatar: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
    },
    {
      name: "Erick Debouted",
      _id: "sdhshshan87678",
      message: "haha nice meme",
      timestamp: "3 min ago",
    },
  ];
  return (
    <div className="chats">
      {chatsArray.map((chat) => (
        <Chat
          name={chat.name}
          avatar={chat.avatar}
          message={chat.message}
          timestamp={chat.timestamp}
          id={chat._id}
        />
      ))}
    </div>
  );
}

export default Chats;
