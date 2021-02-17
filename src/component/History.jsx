import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import search from "../assests/search.svg";
function History(props) {
  const [totalData, setTotalData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    let updatedPaymentHistory = [];
    props.paymentHistory.forEach((historyItem) => {
      historyItem.forEach((item) => {
        if (searchVal.length > 9 && item.dateTime.split(",")[0] == searchVal) {
          updatedPaymentHistory.push(item);
        } else if (searchVal.length < 1) {
          updatedPaymentHistory.push(item);
        }
      });
    });

    setTotalData(updatedPaymentHistory);
  }, [searchVal]);
  return (
    <div className="history-table-block">
      <input
        type="text"
        placeholder="mm/dd/yyy"
        className="filter-history-table"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      ></input>
      <img className="search-logo" src={search}></img>
      <table className="payment-history-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>No of Plate</th>
            <th>Amount</th>
            <th>Payment Type</th>
            <th>Payment Date/Time</th>
          </tr>
          {totalData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.plate}</td>
              <td>{item.amount}</td>
              <td>{item.paymentType}</td>
              <td>{item.dateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const mapSatetoProps = (state) => {
  return {
    paymentHistory: state.historyDetails.paymentHistory,
  };
};
export default connect(mapSatetoProps, null)(React.memo(History));
