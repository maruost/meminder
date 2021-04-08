import React from "react";
import TinderCards from "../TinderCards/TinderCards";
import "./main.css";
import BottomButtons from "../BottomButtons/BottomButtons";

function Main({ people, onSwiped, onSwipe, onOutOfFrame, childRefs }) {
  return (
    <div className="main">
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
