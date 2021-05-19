import React, { useState } from "react";
import { Link } from "react-router-dom";
import TinderCards from "../TinderCards/TinderCards";
import s from "./main.module.scss";
import BottomButtons from "../BottomButtons/BottomButtons";
import { Backdrop, Button, IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Refresh } from "@material-ui/icons/";
import authData from "../utils/authData";

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
  matchedPerson,
  peopleState,
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

  const handleRefresh = () => {
    console.log("refresh");
    window.location.reload(false); // this code should be replaced by GET request to API to get new users data
  };

  return (
    <div className={s.main}>
      <Backdrop className={`${classes.root} ${classes.backdrop}`} open={open}>
        {open ? (
          <div className={s.match}>
            <p className={s["match-title"]}>О! Повезло, повезло! </p>
            <p className={s["match-subtitle"]}>
              Это <span>MATCH!</span> Ты и {matchedPerson.name} лайкнули друг
              друга
            </p>
            <img
              className={s["match-avatar"]}
              src={matchedPerson.files[0]}
              width="200px"
              height="200px"
              alt="аватар"
            />
            <div className={s.buttons}>
              <Button
                className={`${s.button} ${s.outlined}`}
                variant="outlined"
                component={Link}
                to={`/chats/${matchedPerson._id}`}
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
      {peopleState.length !== 0 ? (
        <>
          <TinderCards
            people={people}
            onSwiped={onSwiped}
            onOutOfFrame={onOutOfFrame}
            childRefs={childRefs}
            onHandleMatch={onHandleMatch}
            onHandleOpen={handleOpen}
          />
          <BottomButtons people={people} onSwipe={onSwipe} />
        </>
      ) : (
        <>
          <div className={s["end"]}>
            <p className={s["end-title"]}>Оп, оп! Живём, живём!</p>
            <p className={s["end-subtitle"]}>
              {authData.gender === "female"
                ? "(ты долисталa до конца)"
                : "(ты долистал до конца)"}
            </p>
          </div>
          <IconButton>
            <Refresh className={s["refresh-button"]} onClick={handleRefresh} />
          </IconButton>
        </>
      )}
    </div>
  );
}

export default Main;
