import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function Payment(props) {
  const [paymentSum, setPaymentSummary] = useState([]);
  useEffect(() => {
    let uniqueItems = [];
    let foodState = props.paymentSummary;
    let computedItems = foodState.map((list) => {
      let count = 0;
      for (let key in foodState) {
        if (foodState[key].name === list.name) {
          count++;
        }
      }
      return {
        amount: list.amount * count,
        name: list.name,
        plate: list.plate * count,
      };
    });

    uniqueItems = [
      ...new Map(computedItems.map((item) => [item["name"], item])).values(),
    ];
    setPaymentSummary(() => uniqueItems);
    return () => {};
  }, [props]);

  const deleteData = (item) => {
    console.log(item);
  };

  return (
    <div className="app__payment__block">
      <p>PAYMENT DETAILS</p>
      <ul className="payments">
        {paymentSum.map((item, index) => (
          <li key={index}>
            {item.name}
            <span>${item.amount}</span>
            <span>{item.plate}</span>
            <button
              className="delete-btn"
              onClick={deleteData.bind(null, item)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <p>Total Amount :</p>
      <p className="total-amt">
        ${paymentSum.reduce((total, num) => total + num.amount, 0)}
      </p>
      <button className="pay-btn">SUBMIT</button>
    </div>
  );
}
const mapSatetoProps = (state) => {
  // console.log(state.payDetails.paymentSummary);
  //paydetails is referencing PaymentDetatils Sate
  //paymentSummary is the name the of the object of the state

  return {
    paymentSummary: state.payDetails.paymentSummary,
  };
};
export default connect(mapSatetoProps)(React.memo(Payment));
