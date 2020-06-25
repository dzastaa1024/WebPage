import React, { useState } from "react";
import placeholder from "../../img/placeholder.jpg";
import "./style.scss";

export default function Card({ text }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="isActive" className="card">
      <div className="card__img-area">
        <img className="card__image" src={placeholder} />
      </div>
      <button
        onClick={() => setIsActive((prevState) => !prevState)}
        className={`card__button ${isActive ? "card__button--active" : ""}`}
      >
        {text}
      </button>
    </div>
  );
}
//className="card active"
