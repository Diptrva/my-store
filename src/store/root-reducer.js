import { combineReducers } from "redux";
import { productsReducer } from "./products/reducer";
import { productReducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";
import { orderReducer } from "./order/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  order: orderReducer,
});

export default rootReducer;
