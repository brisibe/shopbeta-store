import { GET_ALL_PRODUCTS, CREATE_PRODUCT, DELETE_PRODUCT } from "./types";
import ProductDataService from "../services/products";
import { addAlertWithTimout } from "./alert";

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await ProductDataService.getAll();

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(addAlertWithTimout("warning", "oops something went wrong"));
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const res = await ProductDataService.create(product);

    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {}
};
export const deleteProduct = (id, name) => async (dispatch) => {
  try {
    await ProductDataService.delete(id);

    dispatch({
      type: DELETE_PRODUCT,
      payload: name,
    });
  } catch (err) {}
};
