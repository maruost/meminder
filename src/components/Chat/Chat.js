import React, { useState, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./chat.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Chat({ name, avatar, message, timestamp, id, ...props }) {
  const classes = useStyles();
  const [initials, setInitials] = useState();
  console.log(props);


  useEffect(() => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    setInitials(initials);
  }, [name]);

  return (
    <Link to={`/chats/${id}`}>
      <div className="chat">
        <Avatar alt={name} src={avatar} className={classes.large}>
          {initials}
        </Avatar>
        <div className="chat__details">
          <h4 className="chat__userName">{name}</h4>
          <p className="chat__message">{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
