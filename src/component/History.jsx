import React from "react";
import { connect } from "react-redux";
function History(props) {
  console.log(props.paymentHistory);

  props.paymentHistory.map((data) => {
    console.log(data);
  });
  return (
    <div>
      <h1>History Component</h1>
      <table>
        <tr>
          <th>Food Name</th>
          <th>Amount Paid</th>
          <th>Payment Type</th>
          <th>Payment Date & Time</th>
        </tr>
        <tr></tr>
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
