import { React } from "react";
import TinderCardContainer from "../TinderCardContainer/TinderCardContainer";
import s from "./tinderCards.module.scss";

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
    <div className={s.cards}>
      {people.map((person, i) => (
        <TinderCardContainer
          person={person}
          key={person._id}
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
