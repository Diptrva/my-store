import axios from "axios";
import {
  fetchProduct,
  fetchProductError,
  fetchProductSuccess,
} from "./action-creators";

/**
 * Получение продукта по id
 */
export const fetchProductAsync = (id = "") => {
  return async (dispatch) => {
    dispatch(fetchProduct());

    try {
      const response = await axios.get(`/mocks/product-${id}.json`);
      dispatch(fetchProductSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductError(error));
    }
  };
};
