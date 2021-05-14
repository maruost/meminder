import React from "react";
import TinderCard from "react-tinder-card";
import "./tinderCardContainer.css";
import CardsCarousel from "../CardsCarousel/CardsCarousel";

function TinderCardContainer({
  person,
  onSwiped,
  onOutOfFrame,
  childRefs,
  index,
  ...props
}) {
  const handleSwiped = (dir) => {
    onSwiped(dir, person.name);
    //if (dir === "right") {
    // send request to Api to add to likes
    // } else if (dir === "left") {
    //  send request to Api to add to dislikes
    // }
  };

  const handleOutOfFrame = () => {
    onOutOfFrame(person.name);
  };

  return (
    <TinderCard
      className="swipe"
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
