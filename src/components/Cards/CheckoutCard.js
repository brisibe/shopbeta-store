import React from "react";
import { connect } from "react-redux";
import { addAlertWithTimout } from "../../actions/alert";
import {
  removeProductFromCart,
  changeProductQuantity,
} from "../../actions/cart";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import { FaTrash } from "react-icons/fa";
import { Image } from "../Images/Image";

const CheckoutCard = ({
  product,
  removeProductFromCart,
  changeProductQuantity,
  addAlertWithTimout,
  updateTotalPrice,
  cart,
}) => {
  const { name, seller, price, photo, productId, subtotal, quantity } = product;
  const handleInputChange = (val) => {
    //for some reasons input changes to string, so we convert to number first.
    changeProductQuantity(productId, Number(val));
  };

  const deleteFromCart = () => {
    removeProductFromCart(productId, subtotal);
    addAlertWithTimout("info", "Item removed.");
  };

  return (
    <Box w="100%" bgColor="white" h="auto" p="4" mb={2}>
      <Stack align="flex-end">
        <Flex
          h="100%"
          w="100%"
          flexWrap={["wrap", "nowrap"]}
          direction={["column"]}
        >
          <Stack w={["100%", "80%"]} align="center">
            <Flex w={["100%"]}>
              <Box w="80px" h="100%" mr="2">
                <Image src={photo} />
              </Box>
              <Box w={["80%", "80%"]}>
                <Text fontSize={["12px", "14px"]} color="gray.400">
                  Seller: {seller}
                </Text>
                <Text
                  fontSize={["12px", "18px"]}
                  fontWeight="bold"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  display="inline-block"
                  w="90%"
                >
                  {name}
                </Text>
              </Box>
            </Flex>
          </Stack>
          <Flex
            w={["100%", "80%"]}
            align="center"
            mt={["4", "2"]}
            fontWeight="medium"
          >
            <Box flex="1">
              {" "}
              <NumberInput
                size="md"
                maxW={20}
                min={1}
                value={quantity}
                onChange={handleInputChange}
                defaultValue={quantity}
              >
                <NumberInputField />
                <NumberInputStepper w="9">
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box flex="1" display="grid" placeItems="center">
              <Text fontSize={["16px", "24px"]}> &#8358; {price}</Text>
            </Box>
            <Box flex="1" display="grid" placeItems="center">
              <Text fontSize={["16px", "24px"]} color="yellow.500">
                {" "}
                &#8358; {price * quantity}{" "}
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Button
          leftIcon={<FaTrash />}
          //   colorScheme="yellow.500"
          variant="solid"
          w="100px"
          justifySelf="flex-end"
          onClick={deleteFromCart}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.products,
});

export default connect(mapStateToProps, {
  removeProductFromCart,
  changeProductQuantity,
  addAlertWithTimout,
})(CheckoutCard);
