import React from "react";
import { IconButton } from "@material-ui/core";
import { FavoriteBorder, Clear } from "@material-ui/icons";
import "./bottomButtons.css";

function BottomButtons({ onSwipe }) {
  const swipeRightHandler = () => {
    onSwipe("right");
  };

  const swipeLeftHandler = () => {
    onSwipe("left");
  };
  return (
    <div className="bottomButtons">
      <IconButton className="bottomButtons__button" onClick={swipeLeftHandler}>
        <Clear className="bottomButtons__icon bottomButtons__icon_red " />
      </IconButton>
      <IconButton className="bottomButtons__button" onClick={swipeRightHandler}>
        <FavoriteBorder className="bottomButtons__icon bottomButtons__icon_green" />
      </IconButton>
    </div>
  );
}

export default BottomButtons;
