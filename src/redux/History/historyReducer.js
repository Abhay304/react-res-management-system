import { historyState } from "./initialState";
import { ADD_PAYMENT } from "./typeofAction";

const historyReducer = (state = historyState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_PAYMENT:
      return {
        paymentHistory: [...state.paymentHistory, action.payload],
        totalAmount: [
          ...state.totalAmount,
          action.payload.summary.map((elem) => elem.amount),
        ],
      };
    default:
      return state;
  }
};

export default historyReducer;
