import axios from "axios";
import {
  fetchSetOrder,
  fetchSetOrderSuccess,
  fetchSetOrderError,
} from "./action-creators";

/**
 * Оформление заказа
 */
export const fetchSetOrderAsync = () => {
  return async (dispatch) => {
    dispatch(fetchSetOrder());

    try {
      const response = await axios.get("/mocks/order-success.json");
      dispatch(fetchSetOrderSuccess(response.data));
    } catch (error) {
      dispatch(fetchSetOrderError(error));
    }
  };
};
