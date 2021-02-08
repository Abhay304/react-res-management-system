import { ADD_ITEM } from "./typeofAction";

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    info: "Items Added",
    payload: data,
  };
};
