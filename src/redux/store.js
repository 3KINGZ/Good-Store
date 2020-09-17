import { createStore } from "redux";
import addToCartReducer from "./cart/cartReducer";

const store = createStore(addToCartReducer);

export default store;
