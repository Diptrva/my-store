import {
  FETCH_SET_ORDER,
  FETCH_SET_ORDER_ERROR,
  FETCH_SET_ORDER_SUCCESS,
  RESET_ORDER,
} from "./actions";

export const fetchSetOrder = (order) => ({
  type: FETCH_SET_ORDER,
  payload: order,
});
export const fetchSetOrderSuccess = (payload) => ({
  type: FETCH_SET_ORDER_SUCCESS,
  payload,
});
export const fetchSetOrderError = (error) => ({
  type: FETCH_SET_ORDER_ERROR,
  error,
});
export const resetOrder = () => ({
  type: RESET_ORDER,
});
