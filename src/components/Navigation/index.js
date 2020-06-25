import React from "react";
import "./style.scss";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#" className="nav__list-value">
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__list-value">
                Used Cars
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__list-value">
                About Us
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__list-value">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
