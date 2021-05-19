import { React, useState } from "react";
import TinderCardContainer from "../TinderCardContainer/TinderCardContainer";
import "./tinderCards.css";

function TinderCards({
  people,
  onSwiped,
  onOutOfFrame,
  childRefs,
  onHandleMatch,
  onHandleOpen,
  ...props
}) {
  return (
    <div className="cards">
      {people.map((person, i) => (
        <TinderCardContainer
          person={person}
          key={person.firstName}
          onSwiped={onSwiped}
          onOutOfFrame={onOutOfFrame}
          childRefs={childRefs}
          onHandleMatch={onHandleMatch}
          index={i}
          onHandleOpen={onHandleOpen}
        />
      ))}
    </div>
  );
}

export default TinderCards;
