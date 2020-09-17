import { ADD_TO_WISHLIST } from "./wishListTypes";
import { DELETE_FROM_WISHLIST } from "./wishListTypes";

export const addToWishList = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export const deleteFromWishList = (product) => {
  return {
    type: DELETE_FROM_WISHLIST,
    payload: product,
  };
};
