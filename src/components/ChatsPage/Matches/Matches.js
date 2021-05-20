import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "nuka-carousel";
import { Avatar } from "@material-ui/core";
import matches from "../../utils/matches";
import leftArrowIcon from "../../../static/images/left-arrow-dark.svg";
import rightArrowIcon from "../../../static/images/right-arrow-dark.svg";
import s from "./matches.module.scss";
import uniqid from "uniqid";

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
    <div className={s.main}>
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
                  ? `${s.button} ${s["chats__match-nav"]} ${s.left}`
                  : `${s.button} ${s["chats__match-nav"]} ${s.left}`
              }
            >
              {
                <img
                  className={s["button-icon"]}
                  src={leftArrowIcon}
                  alt="arrow"
                />
              }
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
                  ? `${s.button} ${s["chats__match-nav"]} ${s.right}`
                  : `${s.button} ${s["chats__match-nav"]} ${s.right}`
              }
            >
              {
                <img
                  className={s["button-icon"]}
                  src={rightArrowIcon}
                  alt="arrow"
                />
              }
            </button>
          )}
        >
          {matches.map((person) => (
            <div className={s["match-person"]} key={uniqid()}>
              <Link to={`/chats/${person._id}`} className={s.link}>
                <Avatar src={person.files[0]} className={classes.large} />
                <p className={s.name}>{person.firstName}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Matches;
