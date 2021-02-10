import React, { useState } from "react";
import { connect } from "react-redux";
import NonVegComponent from "./NonVegComponent";
import VegComponent from "./VegComponent";
import vegLogo from "../assests/lettuce.svg";
import nonVegLogo from "../assests/nonVeg.svg";
import Payment from "./Payment";
function MenuComponent(props) {
  localStorage.setItem("historyJson", JSON.stringify(props.paymentHistory));
  localStorage.setItem("totalAmount", JSON.stringify(props.totalAmount));
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
          <p>
            Earned :$
            {props.totalAmount.reduce((total, num) => total + num, 0)}
          </p>
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
            <img src={nonVegLogo} alt="nonVeg-logo"></img>
          </span>
          <span
            className={
              foodType === "Veg" ? "app__menu__wrapper-active" : undefined
            }
          >
            <a onClick={setFood} food-type="Veg">
              Veg
            </a>
            <img src={vegLogo} alt="veg-Logo"></img>
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
const mapSatetoProps = (state) => {
  return {
    totalAmount: state.historyDetails.totalAmount,
    paymentHistory: state.historyDetails.paymentHistory,
  };
};
export default connect(mapSatetoProps, null)(React.memo(MenuComponent));

//Redundancy Removed
// this is creating array inside array every time
//   [...state.totalAmount,action.payload.summary.map((elem) => elem.amount)],
// let finalAmountArr = [];

//Need when we are doing upper code in the history reducer as basically we are handing array inside array
// for (let i = 0; i < props.totalAmount.length; i++) {
//   if (props.totalAmount[i].length > 0) {
//     for (let j = 0; j < props.totalAmount[i].length; j++) {
//       finalAmountArr.push(props.totalAmount[i][j]);
//     }
//   } else {
//     finalAmountArr.push(props.totalAmount[i]);
//   }
// }
