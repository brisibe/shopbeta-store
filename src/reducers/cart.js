import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
  UPDATE_TOTAL,
} from "../actions/types";

const initialState = {
  products: [],
  cartQuantity: 0,
  totalPrice: 0,
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    // case LOAD_CART:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    case ADD_TO_CART:
      return Object.assign({}, state, {
        products: [...state.products, action.payload],
        cartQuantity: state.cartQuantity + 1,
        totalPrice: state.totalPrice + action.payload.subtotal,
      });

    case REMOVE_FROM_CART:
      const products = state.products.filter(
        (product) => product.productId !== action.id
      );

      return Object.assign({}, state, {
        products,
        cartQuantity: state.cartQuantity - 1,
        totalPrice: state.totalPrice - action.subtotal,
      });

    case CHANGE_PRODUCT_QUANTITY:
      const product = state.products.find(
        (product) => product.productId === action.productId
      );
      product.quantity = action.quantity;
      product.subtotal = action.quantity * product.price;
      const subtotal = state.products.reduce(
        (sum, prod) => (sum += prod.subtotal),
        0
      );

      return Object.assign({}, state, {
        products: [...state.products],
        totalPrice: subtotal,
      });

    case UPDATE_TOTAL:
      return Object.assign({}, state, {
        totalPrice: action.total,
      });

    default:
      return state;
  }
}
