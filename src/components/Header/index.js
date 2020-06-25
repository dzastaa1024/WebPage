import React from "react";
import logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook";
import Twitter from "../../assets/twitter";
import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__logo">
            <img className="logo" src={logo} />
          </div>
          <div className="header__social-media">
            <div className="header__phoneNo">phoneNo 435345</div>
            <span>
              <Facebook />
              <Twitter />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
