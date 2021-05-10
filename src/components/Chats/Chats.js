import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Chat from "../Chat/Chat";
import { makeStyles } from "@material-ui/core/styles";
import "./chats.css";
import Carousel from "nuka-carousel";
import { Avatar } from "@material-ui/core";
import leftArrowIcon from "../../static/images/left-arrow-dark.svg";
import rightArrowIcon from "../../static/images/right-arrow-dark.svg";
import ChatScreen from "../ChatScreen/ChatScreen";

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
    <section className="chats">
      <h4 className="chats__title">Ваши пары</h4>
      <div className="chats__matches">
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
          {chatsArray.map((person) => (
            <div className="chats__match-person">
              <Link to={`/chats/${person._id}`}>
                <Avatar src={person.avatar} className={classes.large} />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="chats__items">
        <h4 className="chats__title">Чаты</h4>
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
    </section>
  );
}

export default Chats;
