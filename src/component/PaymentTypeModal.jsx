import React from "react";
import phonePe from "../assests/Phone-Pe-logo.png";
import gPay from "../assests/Gpay.png";
import cash from "../assests/cash.svg";
import paytm from "../assests/paytm-logo.svg";

function PaymentTypeModal() {
  return (
    <div className="modal__wrraper">
      <div className="modal__inner__wrraper">
        <span className="close-btn">X</span>
        <p className="modal__title">Payment Done Using</p>
        <div className="modal__payment__block">
          <div className="payment__type">
            <input type="radio" id="cash" name="gender" value="cash"></input>
            <label for="cash">
              <img src={cash}></img>
            </label>
          </div>
          <div className="payment__type">
            <input
              type="radio"
              id="phonePe"
              name="gender"
              value="phonePe"
            ></input>
            <label for="phonePe">
              <img src={phonePe}></img>
            </label>
          </div>
          <div className="payment__type">
            <input
              type="radio"
              id="googlePay"
              name="gender"
              value="googlePay"
            ></input>
            <label for="googlePay">
              <img src={gPay}></img>
            </label>
          </div>

          <div className="payment__type">
            <input type="radio" id="Paytm" name="gender" value="Paytm"></input>
            <label for="Paytm">
              <img src={paytm}></img>
            </label>
          </div>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default PaymentTypeModal;
