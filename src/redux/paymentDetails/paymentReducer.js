import { paymentState } from "./initialState";
import { ADD_ITEM, DEL_ITEM, CLEAR_ITEM } from "./typeofAction";

const paymentReducer = (state = paymentState, action) => {
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
    case CLEAR_ITEM:
      return {
        paymentSummary: [],
      };
    default:
      return state;
  }
};

export default paymentReducer;
