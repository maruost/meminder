import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./chatMessage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

function ChatMessage({ className, name, avatar, timestamp, message, index }) {
  const classes = useStyles();
  const [initials, setInitials] = useState();

  useEffect(() => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    setInitials(initials);
  }, [name]);

  return (
    <div className={className} style={{ order: -index }}>
      {avatar ? (
        <Avatar alt={name} src={avatar} className={classes.medium}>
          {initials}
        </Avatar>
      ) : null}
      <div className={`${className}__box`}>
        <p className={`${className}__text`}>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
