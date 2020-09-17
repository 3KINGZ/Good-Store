import { combineReducers } from "redux";
import addToCartReducer from "./cart/cartReducer";
import addTowishListReducer from "./wishList/wishListReducer";

const rootReducer = combineReducers({
  cart: addToCartReducer,
  wishList: addTowishListReducer,
});

export default rootReducer;
