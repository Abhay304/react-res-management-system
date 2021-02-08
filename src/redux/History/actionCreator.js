import { ADD_PAYMENT } from "./typeofAction";

export const addpayment = (data) => {
  return {
    type: ADD_PAYMENT,
    info: "Items Added",
    payload: data,
  };
};
