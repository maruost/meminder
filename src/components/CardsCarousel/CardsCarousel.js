import React from "react";
import Carousel from "nuka-carousel";
import Card from "../Card/Card";
import "./cardsCarousel.css";

const styleConfig = {
  nextButtonText: ">",
  prevButtonText: "<",
  prevButtonStyle: { backgroundColor: "transparent" },
  nextButtonStyle: { backgroundColor: "transparent" },
  pagingDotsStyle: {
    display: "none",
  },
};

function CardsCarousel({ person }) {
  return (
    <div className="carousel">
      <Carousel
        dragging={false}
        defaultControlsConfig={styleConfig}
        swiping={false}
      >
        {person.memes.map((meme) => (
          <Card name={person.name} meme={meme} />
        ))}
      </Carousel>
    </div>
  );
}

export default CardsCarousel;
