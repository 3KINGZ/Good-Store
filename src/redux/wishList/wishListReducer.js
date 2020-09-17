import { ADD_TO_WISHLIST } from "./wishListTypes";
import { DELETE_FROM_WISHLIST } from "./wishListTypes";

const initialState = {
  wishList: [],
  totalItems: 0,
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      let isNotPresent = false;
      const newState = { ...state };
      state.wishList.forEach((product) => {
        if (product.id === action.payload.id) {
          isNotPresent = true;
        }
      });
      if (!isNotPresent) {
        newState.wishList.push(action.payload);
        newState.totalItems++;
      }
      return newState;
    case DELETE_FROM_WISHLIST:
      const newSt = { ...state };
      const filteredState = newSt.wishList.filter((product) => {
        return product.id !== action.payload;
      });
      newSt.wishList = filteredState;
      newSt.totalItems--;
      return newSt;
    default:
      return state;
  }
};

export default wishListReducer;
