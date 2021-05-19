import React, { useState } from "react";
import { Link } from "react-router-dom";
import TinderCards from "../TinderCards/TinderCards";
import s from "./main.module.scss";
import BottomButtons from "../BottomButtons/BottomButtons";
import { Backdrop, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Main({
  people,
  onSwiped,
  onSwipe,
  onOutOfFrame,
  childRefs,
  lastDirection,
  onHandleMatch,
  isMatch,
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={s.main}>
      <Backdrop className={`${classes.root} ${classes.backdrop}`} open={open}>
        {open ? (
          <div className={s.match}>
            <p className={s["match-title"]}>О! Повезло, повезло! </p>
            <p className={s["match-subtitle"]}>
              Это MATCH! Ты и {isMatch.name} лайкнули друг друга
            </p>
            <img
              className={s["match-avatar"]}
              src={isMatch.files[0]}
              width="200px"
              height="200px"
            />
            <div className={s.buttons}>
              <Button
                className={`${s.button} ${s.outlined}`}
                variant="outlined"
                component={Link}
                to={`/chats/${isMatch._id}`}
              >
                Написать сообщение
              </Button>
              <Button className={s.button} onClick={handleClose}>
                Продолжить свайпать мемы
              </Button>
            </div>
          </div>
        ) : null}
      </Backdrop>
      <TinderCards
        people={people}
        onSwiped={onSwiped}
        onOutOfFrame={onOutOfFrame}
        childRefs={childRefs}
        onHandleMatch={onHandleMatch}
        onHandleOpen={handleOpen}
      />
      <BottomButtons people={people} onSwipe={onSwipe} />
      <p className={s.end}>Оп, оп! Живём, живём!</p>
    </div>
  );
}

export default Main;
