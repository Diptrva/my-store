import axios from "axios";
import {
  fetchProductsSuccess,
  fetchProducts,
  fetchProductsError,
} from "./action-creators";

/**
 * Получение продуктов
 */
export const fetchProductsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProducts());

    try {
      const response = await axios.get("/mocks/products.json");
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsError(error));
    }
  };
};
