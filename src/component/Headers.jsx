import React from "react";
import appLogo from "../assests/cutlery.svg";

function Headers() {
  return (
    <div className="header__wrapper">
      <div className="header__inner__wrapper">
        <div className="header__logo">
          <a>
            <img className="logo" src={appLogo} alt="res-logo"></img>
          </a>
        </div>
        <div className="header__nav__block">
          <ul>
            <li>Home</li>
            <li>History</li>
            <li>
              Abhay
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Headers;
