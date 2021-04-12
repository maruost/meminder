import React from "react";
import Chat from "../Chat/Chat";

function Chats({ ...props}) {
  const chatsArray = [
    {
      name: "John Sallivan",
      message: "hey yo",
      timestamp: "2 sec ago",
      avatar: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
    },
    {
      name: "Erick Debouted",
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
        />
      ))}
    </div>
  );
}

export default Chats;
