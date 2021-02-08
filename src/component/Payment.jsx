import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { delItem } from "../redux/paymentDetails/actionCreator";
import PaymentTypeModal from "./PaymentTypeModal";
function Payment(props) {
  const [paymentSum, setPaymentSummary] = useState([]);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [disablebtn, setbutton] = useState(true);
  useEffect(() => {
    Boolean(props.paymentSummary.length) ? setbutton(false) : setbutton(true);
    localStorage.setItem("SateJson", JSON.stringify(props.paymentSummary));
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
    props.delItem(item.name);
  };

  function toggleModal() {
    setOpenPaymentModal(!openPaymentModal);
  }

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
      <button className="pay-btn" onClick={toggleModal} disabled={disablebtn}>
        SUBMIT
      </button>
      {openPaymentModal && (
        <PaymentTypeModal toggleModal={toggleModal} summary={paymentSum} />
      )}
    </div>
  );
}
const mapSatetoProps = (state) => {
  return {
    paymentSummary: state.payDetails.paymentSummary,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    delItem: (itemObj) => dispatch(delItem(itemObj)),
  };
};

export default connect(mapSatetoProps, mapDispatchToProp)(React.memo(Payment));
