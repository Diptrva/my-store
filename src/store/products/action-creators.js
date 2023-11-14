import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
} from "./actions";

export const fetchProducts = () => ({ type: FETCH_PRODUCTS });
export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});
