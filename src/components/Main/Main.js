import React from "react";
import TinderCards from "../TinderCards/TinderCards";
import s from "./main.module.scss";
import BottomButtons from "../BottomButtons/BottomButtons";

function Main({ people, onSwiped, onSwipe, onOutOfFrame, childRefs }) {
  return (
    <div className={s.main}>
      <TinderCards
        people={people}
        onSwiped={onSwiped}
        onOutOfFrame={onOutOfFrame}
        childRefs={childRefs}
      />
      <BottomButtons people={people} onSwipe={onSwipe} />
    </div>
  );
}

export default Main;
