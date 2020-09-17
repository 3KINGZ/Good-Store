import { ADD_TO_WISHLIST } from "./cartTypes";
import { DELETE_FROM_WISHLIST } from "./cartTypes";

const initialState = {
  wishList: [],
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const newState = { ...state };
      newState.cart.push(action.payload);
      return newState;
    case DELETE_FROM_WISHLIST:
      const newSt = { ...state };
      const filteredState = newSt.cart.filter((product) => {
        return product.id !== action.payload;
      });
      newSt.cart = filteredState;
      return newSt;
    default:
      return state;
  }
};

export default wishListReducer;
