import React from "react";
import Card from "../Card";
import Search from "../Search";

import placeholder from "../../assets/placeholder.jpg";
import "./style.scss";

export default function Main() {
  const cards = ["Used Cars", "About Us", "Contact Us", "Services"];

  return (
    <main className="main">
      <div className="container">
        <section className="hero">
          <div className="hero__serach">
            <Search />
          </div>
          <div className="hero__ima-area">
            <img className="hero__image" src={placeholder} />
          </div>
        </section>
        <section className="desc">
          <h4 className="desc__title">Welcome to Dealer Side</h4>

          <p className="desc__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <p className="desc__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <p className="desc__paragraph">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <br></br>
        </section>
        <section className="cards">
          {cards.map((card) => (
            <Card text={card} />
          ))}
        </section>
      </div>
    </main>
  );
}
