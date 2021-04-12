import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Chat({ name, avatar, message, timestamp, ...props }) {
  const getInitials = () => {
    name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar alt={name} src={avatar}>
          {getInitials}
        </Avatar>
        <p>{message}</p>
        <p>{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
