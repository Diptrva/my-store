import {
  FETCH_SET_ORDER,
  FETCH_SET_ORDER_ERROR,
  FETCH_SET_ORDER_SUCCESS,
  RESET_ORDER,
} from "./actions";

const initialState = {
  /**
   * Покупки
   */
  data: [],
  /**
   * Идет ли загрузка
   */
  loading: false,
  /**
   * Произошла ли ошибка при загрузке
   */
  error: null,
  success: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SET_ORDER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };
    case FETCH_SET_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case RESET_ORDER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
