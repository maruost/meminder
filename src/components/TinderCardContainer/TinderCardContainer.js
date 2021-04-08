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
}) {
  const handleSwiped = (dir) => {
    onSwiped(dir, person.name);
    console.log(childRefs[index])
  };

  const handleOutOfFrame = () => {
    onOutOfFrame(person.name);
    console.log(childRefs[index])
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
