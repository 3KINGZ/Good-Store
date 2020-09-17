import { ADD_TO_WISHLIST } from "./wishListTypes";
import { DELETE_FROM_WISHLIST } from "./wishListTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const deleteFromCart = (product) => {
  return {
    type: DELETE_FROM_WISHLIST,
    payload: product,
  };
};
