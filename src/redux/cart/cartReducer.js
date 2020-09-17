import { ADD_TO_CART } from "./cartTypes";
import { DELETE_FROM_CART } from "./cartTypes";

const initialState = {
  cart: [],
};

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newState = { ...state };
      newState.cart.push(action.payload);
      return newState;
    case DELETE_FROM_CART:
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

export default addToCartReducer;
