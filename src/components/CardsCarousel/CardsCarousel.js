import React from "react";
import Carousel from "nuka-carousel";
import Card from "../Card/Card";
import "./cardsCarousel.css";
import leftArrowIcon from "../../static/images/left-arrow.svg";
import rightArrowIcon from "../../static/images/right-arrow.svg";

const styleConfig = {
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
        renderCenterLeftControls={({
          previousSlide,
          slideCount,
          currentSlide,
        }) => (
          <button
            onClick={previousSlide}
            className={
              currentSlide !== 0
                ? "carousel__button carousel__button_active"
                : "carousel__button carousel__button_inactive"
            }
          >
            {<img className="carousel__button-icon" src={leftArrowIcon} />}
          </button>
        )}
        renderCenterRightControls={({
          nextSlide,
          slideCount,
          currentSlide,
        }) => (
          <button
            onClick={nextSlide}
            className={
              currentSlide !== slideCount - 1
                ? "carousel__button carousel__button_active"
                : "carousel__button carousel__button_inactive"
            }
          >
            {<img className="carousel__button-icon" src={rightArrowIcon} />}
          </button>
        )}
      >
        {person.memes.map((meme) => (
          <Card name={person.name} meme={meme} />
        ))}
      </Carousel>
    </div>
  );
}

export default CardsCarousel;
