import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import s from "./chat.module.scss";

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

  useEffect(() => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    setInitials(initials);
  }, [name]);

  return (
    <Link to={`/chats/${id}`} className={s.link}>
      <div className={s.chat}>
        <Avatar alt={name} src={avatar} className={classes.large}>
          {initials}
        </Avatar>
        <div className={s.details}>
          <h4 className={s["user-name"]}>{name}</h4>
          <p className={s.message}>{message}</p>
        </div>
        <p className={s.timestamp}>{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
