import React from "react";
import s from "./card.module.scss";

function Card({ name, meme }) {
  return (
    <div className={s.card} style={{ backgroundImage: `url(${meme})` }}>
      <p className={s["user-name"]}>{name}</p>
    </div>
  );
}

export default Card;
