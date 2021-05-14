import { React, useState } from "react";
import TinderCardContainer from "../TinderCardContainer/TinderCardContainer";
import "./tinderCards.css";

function TinderCards({ people, onSwiped, onOutOfFrame, childRefs, ...props }) {
  return (
    <div className="cards">
      {people.map((person, i) => (
        <TinderCardContainer
          person={person}
          key={person.name}
          onSwiped={onSwiped}
          onOutOfFrame={onOutOfFrame}
          childRefs={childRefs}
          index={i}
        />
      ))}
    </div>
  );
}

export default TinderCards;
