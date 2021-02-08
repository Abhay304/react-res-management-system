import { paymentState } from "./initialState";
import { ADD_ITEM, DEL_ITEM } from "./typeofAction";

const paymentReducer = (state = paymentState, action) => {
  // console.log(state.paymentSummary);
  // console.log("Paylod");

  console.log(action.payload);
  switch (action.type) {
    case ADD_ITEM:
      return {
        paymentSummary: [...state.paymentSummary, action.payload],
      };
    case DEL_ITEM:
      return {
        paymentSummary: state.paymentSummary.filter(
          (details) => details.name != action.payload
        ),
      };
    default:
      return state;
  }
};

export default paymentReducer;
