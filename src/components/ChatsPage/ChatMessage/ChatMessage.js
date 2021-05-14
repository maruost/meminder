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

function ChatMessage({
  className,
  firstName,
  lastName,
  avatar,
  timestamp,
  message,
  index,
}) {
  const classes = useStyles();
  const [initials, setInitials] = useState();

  useEffect(() => {
    const initials = firstName[0] + lastName[0];
    setInitials(initials);
  }, [firstName, lastName]);

  return (
    <div className={`${className}__wrapper`} style={{ order: -index }}>
      <div className={className}>
        {avatar ? (
          <Avatar alt={firstName} src={avatar} className={classes.medium}>
            {initials}
          </Avatar>
        ) : null}
        <div className={`${className}__box`}>
          <p className={`${className}__text`}>{message}</p>
        </div>
      </div>
      <p className={`${className}__timestamp`}>{timestamp}</p>
    </div>
  );
}

export default ChatMessage;
