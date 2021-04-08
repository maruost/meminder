import React from "react";
import "./card.css";

function Card({ name, meme }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${meme})` }}>
      <p className="card__userName">{name}</p>
    </div>
  );
}

export default Card;
