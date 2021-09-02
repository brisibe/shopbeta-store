import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
  UPDATE_TOTAL,
} from "./types";

export const addProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    productId: product.productId,
    name: product.name,
    quantity: 1,
    price: product.price,
    subtotal: product.price,
    seller: product.sellerName,
    photo: product.photo,
  },
});

export const removeProductFromCart = (productId, subtotal) => ({
  type: REMOVE_FROM_CART,
  id: productId,
  subtotal,
});

export const changeProductQuantity = (productId, quantity) => ({
  type: CHANGE_PRODUCT_QUANTITY,

  productId,
  quantity,
});

export const updateTotalPrice = (totalPrice) => {
  return {
    type: UPDATE_TOTAL,
    total: totalPrice,
  };
};
