import { Box, Flex, Heading } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import CheckoutAlert from "../components/Alert/CheckoutAlert";
import { Button } from "../components/Button/Button";
import CheckoutCard from "../components/Cards/CheckoutCard";

const CartPage = ({ cartProducts, cartQuantity, totalPrice, user }) => {
  const { isOpen, onOpen } = useDisclosure();
  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  const checkoutHandler = () => {
    if (user === null) {
      return history.push("/login");
    }

    onOpen();
  };

  return (
    <Box w="100%" h="auto">
      <Box w="100%" h="auto" p={["2", "8"]} mt={4}>
        <Heading fontWeight="bold" fontSize={["18px", "24px"]} pb="8">
          Cart {`(${cartQuantity} items)`}
        </Heading>

        <Flex direction="column" mb={8}>
          {cartProducts.map((product) => (
            <CheckoutCard product={product} key={product.productId} />
          ))}
        </Flex>

        <Heading size="lg" textAlign="end" color="yellow.500" mb={8}>
          Total: &#8358;{" "}
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Heading>

        <Button
          bgColor="yellow.500"
          w="100%"
          color="white"
          size={"lg"}
          onClick={checkoutHandler}
        >
          Checkout
        </Button>

        <Modal onClose={redirect} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Success!!!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cartQuantity > 0 ? (
                <CheckoutAlert />
              ) : (
                "Cart is empty. Add products to cart to checkout."
              )}
            </ModalBody>
            <ModalFooter>
              <Button bgColor="yellow.500" onClick={redirect}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
  cartQuantity: state.cart.cartQuantity,
  totalPrice: state.cart.totalPrice,
  user: state.auth.user,
});

export default connect(mapStateToProps)(CartPage);
