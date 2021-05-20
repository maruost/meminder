import React from "react";
import { IconButton } from "@material-ui/core";
import { FavoriteBorder, Clear } from "@material-ui/icons";
import s from "./bottomButtons.module.scss";

function BottomButtons({ onSwipe }) {
  const swipeRightHandler = () => {
    onSwipe("right");
  };

  const swipeLeftHandler = () => {
    onSwipe("left");
  };
  return (
    <div className={s["bottom-buttons"]}>
      <IconButton className={s.button} onClick={swipeLeftHandler}>
        <Clear className={s.red} />
      </IconButton>
      <IconButton className={s.button} onClick={swipeRightHandler}>
        <FavoriteBorder className={s.green} />
      </IconButton>
    </div>
  );
}

export default BottomButtons;
