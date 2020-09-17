import { ADD_TO_CART } from "./cartTypes";
import { DELETE_FROM_CART } from "./cartTypes";

const initialState = {
  cart: [],
  totalItems: 0,
};

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isNotPresent = false;
      const newState = { ...state };
      state.cart.forEach((product) => {
        if (product.id === action.payload.id) {
          isNotPresent = true;
        }
      });
      if (!isNotPresent) {
        newState.cart.push(action.payload);
        newState.totalItems++;
        newState.isAdded = true;
      } else {
        newState.isAdded = false;
      }

      return newState;
    case DELETE_FROM_CART:
      const newSt = { ...state };
      const filteredState = newSt.cart.filter((product) => {
        return product.id !== action.payload;
      });
      newSt.cart = filteredState;
      newSt.totalItems--;
      return newSt;
    default:
      return state;
  }
};

export default addToCartReducer;
