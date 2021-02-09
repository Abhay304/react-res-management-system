import { historyState } from "./initialState";
import { ADD_PAYMENT } from "./typeofAction";

const historyReducer = (state = historyState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      return {
        paymentHistory: [...state.paymentHistory, action.payload],
        totalAmount: state.totalAmount.concat(
          action.payload.summary.map((elem) => elem.amount)
        ),
      };
    default:
      return state;
  }
};

export default historyReducer;
