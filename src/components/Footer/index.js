import React from "react";
import "./style.scss";

export default function Footer() {
  const listOfitems = [
    "Alfa Romeo",
    "Audi",
    "BMW",
    "Citroen",
    "Dacia",
    "Fiat",
    "Ford",
    "Honda",
  ];
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__menu">
          {listOfitems.map((item) => (
            <li key={item} className="footer__menu-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
