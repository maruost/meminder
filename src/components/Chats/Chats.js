import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Chat from "../Chat/Chat";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import { Avatar } from "@material-ui/core";
import leftArrowIcon from "../../static/images/left-arrow-dark.svg";
import rightArrowIcon from "../../static/images/right-arrow-dark.svg";
import ChatScreen from "../ChatScreen/ChatScreen";
import s from "./chats.module.scss";
import matches from "../utils/matches";
import chats from "../utils/chats";

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

const styleConfig = {
  pagingDotsStyle: {
    display: "none",
  },
};

function Chats({ ...props }) {
  const classes = useStyles();
  const handleBackButton = (path) => {
    props.onHandleBackButton(path);
  };
  useEffect(() => {
    handleBackButton("/");
    return () => {
      handleBackButton(null);
    };
  }, []);

  return (
    <section className={s.chats}>
      <h4 className={s.title}>Твои пары</h4>
      <div className={s.matches}>
        <Carousel
          slidesToShow={7}
          defaultControlsConfig={styleConfig}
          renderCenterLeftControls={({
            previousSlide,
            slideCount,
            currentSlide,
          }) => (
            <button
              onClick={previousSlide}
              className={
                currentSlide !== 0
                  ? "carousel__button chats__match-nav chats__match-nav_left"
                  : "carousel__button chats__match-nav chats__match-nav_left"
              }
            >
              {<img className="carousel__button-icon" src={leftArrowIcon} />}
            </button>
          )}
          renderCenterRightControls={({
            nextSlide,
            slideCount,
            currentSlide,
          }) => (
            <button
              onClick={nextSlide}
              className={
                currentSlide !== slideCount - 1
                  ? "carousel__button chats__match-nav chats__match-nav_right"
                  : "carousel__button chats__match-nav chats__match-nav_right"
              }
            >
              {<img className="carousel__button-icon" src={rightArrowIcon} />}
            </button>
          )}
        >
          {matches.map((person) => (
            <div className={s["match-person"]}>
              <Link to={`/chats/${person._id}`} className={s.link}>
                <Avatar src={person.files[0]} className={classes.large} />
                <p className={s.name}>{person.firstName}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={s.items}>
        <h4 className={s.title}>Чаты</h4>
        <div className={s.dialogs}>
          {chats.map((chat) => {
            const name = chat.firstName + " " + chat.lastName;
            const msgLen = chat.messages.length;
            const lastMsg = chat.messages[msgLen - 1].message;
            const timestamp = chat.messages[msgLen - 1].timestamp;
            return (
              <Chat
                id={chat._id}
                name={name}
                avatar={chat.avatar}
                message={lastMsg}
                timestamp={timestamp}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Chats;
