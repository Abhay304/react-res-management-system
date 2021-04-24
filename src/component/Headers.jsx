import React, { useState } from "react";
import appLogo from "../assests/cutlery.svg";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import History from "./History";
import MenuComponent from "./MenuComponent";

function Headers() {
  const [mobileNav, setmobileNav] = useState(false);
  const print = () => {
    window.print();
  };
  return (
    <Router>
      <div className="header__wrapper">
        <div className="header__inner__wrapper">
          <div className="header__logo">
            <button>
              <img className="logo" src={appLogo} alt="res-logo"></img>
            </button>
          </div>
          <div className="header__nav__block">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li onClick={print}>
                Print
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </li>
              <li>Logout</li>
            </ul>
          </div>
          <span className="open-mobile-nav" onClick={() => setmobileNav(true)}>
            &#9776; open
          </span>
          <div
            className={`nav-open-close ${
              mobileNav ? "header__nav__block_mobile" : "close-mobile-nav"
            }`}
          >
            {mobileNav && (
              <>
                <a className="closebtn" onClick={() => setmobileNav(false)}>
                  &times;
                </a>
                <Link to="/" onClick={() => setmobileNav(false)}>
                  Home
                </Link>
                <Link to="/history" onClick={() => setmobileNav(false)}>
                  History
                </Link>
                <a onClick={() => setmobileNav(false)}>Abhay</a>
                <a onClick={() => setmobileNav(false)}>Logout</a>
              </>
            )}
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

export default React.memo(Headers);
