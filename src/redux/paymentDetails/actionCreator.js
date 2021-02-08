import { ADD_ITEM, DEL_ITEM, CLEAR_ITEM } from "./typeofAction";

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    info: "Items Added",
    payload: data,
  };
};

export const delItem = (data) => {
  return {
    type: DEL_ITEM,
    info: "Items removed",
    payload: data,
  };
};

export const clearItem = () => {
  return {
    type: CLEAR_ITEM,
    info: "Items Cleared",
  };
};
