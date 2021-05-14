import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import { Avatar } from "@material-ui/core";
import matches from "../../utils/matches";
import leftArrowIcon from "../../../static/images/left-arrow-dark.svg";
import rightArrowIcon from "../../../static/images/right-arrow-dark.svg";
import s from "./matches.module.scss";

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

function Matches({ ...props }) {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default Matches;
