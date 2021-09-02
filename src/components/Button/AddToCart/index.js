import React from "react";
import { connect } from "react-redux";

import { addAlertWithTimout } from "../../../actions/alert";
import {
  addProductToCart,
  removeProductFromCart,
  updateTotalPrice,
} from "../../../actions/cart";
import { AddToCart as AddToCartButton } from "./AddToCart";

const AddToCart = ({
  cart,
  product,
  addAlertWithTimout,
  addProductToCart,
  removeProductFromCart,
  updateTotalPrice,
  children,
}) => {
  const addItemToCart = () => {
    const isProductAlreadyInCart = cart.filter(
      (prod) => prod.productId === product.productId
    );

    if (isProductAlreadyInCart.length > 0) {
      return addAlertWithTimout("info", "Item already in cart");
    }

    addProductToCart(product);
    addAlertWithTimout("success", `${product.name} has been added to cart`);
  };

  return (
    <AddToCartButton clickHandler={addItemToCart}>{children}</AddToCartButton>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.products,
});

export default connect(mapStateToProps, {
  addAlertWithTimout,
  addProductToCart,
  removeProductFromCart,
  updateTotalPrice,
})(AddToCart);
