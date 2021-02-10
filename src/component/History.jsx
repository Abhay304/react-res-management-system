import React from "react";
import { connect } from "react-redux";
function History(props) {
  // console.log(props.paymentHistory);
  return (
    <div>
      <h1>History Component</h1>
    </div>
  );
}
const mapSatetoProps = (state) => {
  return {
    paymentHistory: state.historyDetails.paymentHistory,
  };
};
export default connect(mapSatetoProps, null)(React.memo(History));
