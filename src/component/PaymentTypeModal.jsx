import React, { useState } from "react";
import { addpayment } from "../redux/History/actionCreator";
import { clearItem } from "../redux/paymentDetails/actionCreator";
import { connect } from "react-redux";
import phonePe from "../assests/Phone-Pe-logo.png";
import gPay from "../assests/Gpay.png";
import cash from "../assests/cash.svg";
import paytm from "../assests/paytm-logo.svg";

function PaymentTypeModal(props) {
  const { summary, toggleModal } = props;

  const [paymentType, setPaymentType] = useState("");
  const erroRef = React.useRef();
  const submitWithPayment = () => {
    if (!paymentType) {
      erroRef.current.innerText = "Kindly Select Payment Type  to Continue";
      return null;
    }
    erroRef.current.innerText = "";
    const dateTimeStamp = new Date().toLocaleString();
    summary.forEach((data) => {
      data.paymentType = paymentType;
      data.dateTime = dateTimeStamp;
    });
    console.log(summary);
    props.addpayment(summary);
    props.clearItem();
    toggleModal();
  };

  return (
    <div className="modal__wrraper">
      <div className="modal__inner__wrraper">
        <span className="close-btn" onClick={toggleModal}>
          X
        </span>
        <p className="modal__title">Payment Done Using</p>
        <div
          className="modal__payment__block"
          onChange={(e) => setPaymentType(e.target.value)}
        >
          <div className="payment__type">
            <input
              type="radio"
              id="cash"
              name="paymentType"
              value="Cash"
            ></input>
            <label htmlFor="cash">
              <img src={cash} alt="cash-logo"></img>
            </label>
          </div>
          <div className="payment__type">
            <input
              type="radio"
              id="phonePe"
              name="paymentType"
              value="Phone Pe"
            ></input>
            <label htmlFor="phonePe">
              <img src={phonePe} alt="phonePe-logo"></img>
            </label>
          </div>
          <div className="payment__type">
            <input
              type="radio"
              id="googlePay"
              name="paymentType"
              value="Google Pay"
            ></input>
            <label htmlFor="googlePay">
              <img src={gPay} alt="Gpay-logo"></img>
            </label>
          </div>

          <div className="payment__type">
            <input
              type="radio"
              id="Paytm"
              name="paymentType"
              value="Paytm"
            ></input>
            <label htmlFor="Paytm">
              <img src={paytm} alt="Paytm-logo"></img>
            </label>
          </div>
        </div>
        <div className="errorText" ref={erroRef}></div>
        <button className="submit-btn" onClick={submitWithPayment}>
          Submit
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProp = (dispatch) => {
  return {
    addpayment: (itemObj) => dispatch(addpayment(itemObj)),
    clearItem: () => dispatch(clearItem()),
  };
};

export default connect(null, mapDispatchToProp)(React.memo(PaymentTypeModal));

// export default PaymentTypeModal;
