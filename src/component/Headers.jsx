import React from "react";
import appLogo from "../assests/cutlery.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import History from "./History";
import MenuComponent from "./MenuComponent";
function Headers() {
  return (
    <Router>
      <div className="header__wrapper">
        <div className="header__inner__wrapper">
          <div className="header__logo">
            <a>
              <img className="logo" src={appLogo} alt="res-logo"></img>
            </a>
          </div>
          <div className="header__nav__block">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                Abhay
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={MenuComponent}></Route>
        <Route exact path="/history" component={History}></Route>
      </Switch>
    </Router>
  );
}

export default Headers;
