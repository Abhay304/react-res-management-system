import { combineReducers } from "redux";
import paymentReducer from "./paymentDetails/paymentReducer";
const rootReducer = combineReducers({
  payDetails: paymentReducer,
});

export default rootReducer;
