import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
} from "./actions";

export const fetchProduct = () => ({ type: FETCH_PRODUCT });
export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});
export const fetchProductError = (error) => ({
  type: FETCH_PRODUCT_ERROR,
  error,
});
