import React, { useState } from "react";
import NonVegComponent from "./NonVegComponent";
import VegComponent from "./VegComponent";
import vegLogo from "../assests/lettuce.svg";
import nonVegLogo from "../assests/nonVeg.svg";
import Payment from "./Payment";
function MenuComponent() {
  const [foodType, setFoodType] = useState("nonVeg");

  const setFood = (e) => {
    let foodType = e.target.attributes[0].value;
    setFoodType(foodType);
  };
  return (
    <div className="app__wrapper">
      <div className="app__inner__wrapper">
        <div className="app__inner__title">
          <p>Menu</p>
          <p>Earned :$450</p>
        </div>

        <div className="app__menu__wrapper">
          <span
            className={
              foodType === "nonVeg" ? "app__menu__wrapper-active" : undefined
            }
          >
            <a onClick={setFood} food-type="nonVeg">
              Non-Veg
            </a>
            <img src={nonVegLogo}></img>
          </span>
          <span
            className={
              foodType === "Veg" ? "app__menu__wrapper-active" : undefined
            }
          >
            <a onClick={setFood} food-type="Veg">
              Veg
            </a>
            <img src={vegLogo}></img>
          </span>
        </div>

        <hr></hr>
        <div className="app__food__wrapper">
          {foodType === "nonVeg" && <NonVegComponent />}
          {foodType === "Veg" && <VegComponent />}
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
