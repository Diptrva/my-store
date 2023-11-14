import { CLEAR_CART, REMOVE_ITEM_FROM_CART, SET_ITEM_IN_CART } from "./actions";

const initialState = {
  data: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM_IN_CART:
      /**
       * Проверяем, есть ли id этого товара в корзине
       */
      if (state.data.some((product) => product.id === action.payload.id)) {
        return state;
      }

      return {
        data: [...state.data, action.payload],
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    case CLEAR_CART:
      return {
        data: [],
      };
    default:
      return state;
  }
};
