import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import AddToCart from "../components/Button/AddToCart";

const ProductPage = ({ products }) => {
  const { state } = useLocation();

  const product = products.find(
    (product) => product.productId === state.prodId
  );
  const { sellerName, name, price, description, category, photo } = product;
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      mb={"5"}
      direction={["column", "column", "row"]}
      align={["center", "flex-start"]}
    >
      <Stack
        direction={["column"]}
        mt={["4"]}
        mb={["4", "12"]}
        w={["100%", "80%"]}
        backgroundColor="white"
        px={2}
        pb={8}
      >
        <Flex direction={["column", "column", "row"]}>
          <Image
            src={photo}
            h={["208px", "308px"]}
            w={["308px", "408px"]}
            m={2}
          />

          <Flex direction="column">
            {" "}
            <Box mb={4} pt={4}>
              <Text color="yellow.500">{sellerName}</Text>
              <Heading
                fontWeight="medium"
                color="gray.600"
                pb={2}
                fontSize={["lg", "2xl"]}
              >
                {name}
              </Heading>
              <Text>category: {category}</Text>
              <Flex align="center" color="gray.500" fontSize="xl">
                {" "}
                <Heading color="gray.700" fontSize={["18px", "24px"]}>
                  &#8358;{" "}
                  {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Heading>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Alert status="success" justifyContent="center">
          <AlertIcon /> Free shipping to all parts of Nigeria, Lol.
        </Alert>

        <Box mb={4} pt={4}>
          <Text fontSize={["16px", "18px"]}>Product Description:</Text>
          <Divider />
          <Text pt={2}>{description}</Text>
        </Box>
        <AddToCart
          bgColor="yellow.500"
          mb={2}
          position={["sticky", "relative"]}
          bottom="0"
          color="white"
          w="100%"
          product={product}
        >
          Add to cart - &#8358;
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </AddToCart>
      </Stack>
      <Flex w={["100%", "20%"]} h="auto" direction="column" m={4}>
        <Box bgColor="white" h="auto" p="4" mb={4}>
          <Text>Seller Info</Text>
          <Divider />

          <Stack>
            <Text>{sellerName}</Text>
          </Stack>
        </Box>

        <Box bgColor="white" h="auto" p="4">
          <Text>Payment options</Text>
          <Divider />

          <Stack>
            <Text>Pay on delivery</Text>
            <Text>credit card</Text>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.prods,
});

export default connect(mapStateToProps)(ProductPage);
