import {
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/types";

const initialState = {
  prods: [],
};

export default function products(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS:
      return Object.assign({}, state, {
        ...state.prods,
        prods: payload,
      });

    case CREATE_PRODUCT:
      return Object.assign({}, state, {
        ...state,
        newProduct: payload,
      });

    case DELETE_PRODUCT:
      return Object.assign({}, state, {
        ...state,
        productToDelete: payload,
      });

    default:
      return state;
  }
}
