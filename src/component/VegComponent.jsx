import React, { useEffect, useState } from "react";
import momo from "../assests/momo.svg";
import { foodState } from "../foodList";
import { addItem } from "../redux/paymentDetails/actionCreator";
import { connect } from "react-redux";
function VegComponent(props) {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    setFoodData(() => foodState);
  }, [props]);

  const senditem = (item) => {
    let itemObj = { amount: item.amount, name: item.name, plate: 1 };
    props.addItem(itemObj);
  };

  return (
    <div className="app__food__block">
      {foodData.map((item, index) =>
        item.typeof === "Veg" ? (
          <div
            className="food__card"
            key={item.name}
            onClick={senditem.bind(null, item)}
          >
            <p>0</p>
            <img src={momo} alt={item.name + "_logo"}></img>
            <h3>{item.name}</h3>
          </div>
        ) : null
      )}
    </div>
  );
}

const mapDispatchToProp = (dispatch) => {
  return {
    addItem: (itemObj) => dispatch(addItem(itemObj)),
  };
};

export default connect(null, mapDispatchToProp)(VegComponent);
// export default VegComponent;
