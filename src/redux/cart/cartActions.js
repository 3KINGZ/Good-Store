import { ADD_TO_CART } from "./cartTypes";
import { DELETE_FROM_CART } from "./cartTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deleteFromCart = (product) => {
  return {
    type: DELETE_FROM_CART,
    payload: product,
  };
};
