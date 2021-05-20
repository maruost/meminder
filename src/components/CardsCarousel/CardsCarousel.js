import React from "react";
import Carousel from "nuka-carousel";
import Card from "../Card/Card";
import s from "./cardsCarousel.module.scss";
import uniqid from "uniqid";
import leftArrowIcon from "../../static/images/left-arrow.svg";
import rightArrowIcon from "../../static/images/right-arrow.svg";

const styleConfig = {
  pagingDotsStyle: {
    display: "none",
  },
};

function CardsCarousel({ person }) {
  return (
    <div className={s.carousel}>
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
                ? `${s.button} ${s.active}`
                : `${s.button} ${s.inactive}`
            }
          >
            {
              <img
                className={s["button-icon"]}
                src={leftArrowIcon}
                alt="icon"
              />
            }
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
                ? `${s.button} ${s.active}`
                : `${s.button} ${s.inactive}`
            }
          >
            {
              <img
                className={s["button-icon"]}
                src={rightArrowIcon}
                alt="icon"
              />
            }
          </button>
        )}
      >
        {person.files.map((meme) => (
          <Card name={person.name} meme={meme} key={uniqid()} />
        ))}
      </Carousel>
    </div>
  );
}

export default CardsCarousel;
