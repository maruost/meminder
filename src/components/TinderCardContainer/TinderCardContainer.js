import React from "react";
import TinderCard from "react-tinder-card";
import s from "./tinderCardContainer.module.scss";
import CardsCarousel from "../CardsCarousel/CardsCarousel";
import authData from "../utils/authData";

function TinderCardContainer({
  person,
  onSwiped,
  onOutOfFrame,
  childRefs,
  index,
  onHandleMatch,
  onHandleOpen,
  ...props
}) {
  const handleSwiped = (dir) => {
    onSwiped(dir, person.name);
    if (dir === "right") {
      const isMatch = person.likes.find((like) => like === authData._id);
      if (isMatch) {
        onHandleMatch(person);
        onHandleOpen();
      } else {
        onHandleMatch({});
      }
    }

    //if (dir === "right") {
    // send request to Api to add to likes
    // send get request to compare user like with liked user likes
    // } else if (dir === "left") {
    //  send request to Api to add to dislikes
    // }
  };

  const handleOutOfFrame = () => {
    onOutOfFrame(person.name);
  };

  return (
    <TinderCard
      className={s.swipe}
      preventSwipe={["up", "down"]}
      ref={childRefs[index]}
      onSwipe={handleSwiped}
      onCardLeftScreen={handleOutOfFrame}
    >
      <CardsCarousel person={person} />
    </TinderCard>
  );
}

export default TinderCardContainer;
