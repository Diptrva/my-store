import { CLEAR_CART, REMOVE_ITEM_FROM_CART, SET_ITEM_IN_CART } from "./actions";

export const setItemInCart = (id) => ({ type: SET_ITEM_IN_CART, payload: id });
export const removeItemFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
