import { combineReducers } from "redux";
import paymentReducer from "./paymentDetails/paymentReducer";
import historyReducer from "./History/historyReducer";
const rootReducer = combineReducers({
  payDetails: paymentReducer,
  historyDetails: historyReducer,
});

export default rootReducer;
