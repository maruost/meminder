import React, { useState } from "react";
import TinderCards from "../TinderCards/TinderCards";
import s from "./main.module.scss";
import BottomButtons from "../BottomButtons/BottomButtons";

function Main({
  people,
  onSwiped,
  onSwipe,
  onOutOfFrame,
  childRefs,
  lastDirection,
  ...props
}) {
  return (
    <div className={s.main}>
      <TinderCards
        people={people}
        onSwiped={onSwiped}
        onOutOfFrame={onOutOfFrame}
        childRefs={childRefs}
      />
      <BottomButtons people={people} onSwipe={onSwipe} />
      <p className={s.end}>Оп, оп! Живём, живём!</p>
    </div>
  );
}

export default Main;
