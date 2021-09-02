import React, { useEffect } from "react";
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/layout";
import { Search } from "../components/Search/Search";
import { Carousel } from "../components/Carousel/Carousel";
import { FaGamepad, FaLaptop, FaMobileAlt, FaTshirt } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/Cards/ProductCard";
import { connect } from "react-redux";
import { getAllProducts } from "../actions/products";

const Home = ({ getAllProducts, products = [] }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Box w="100%" h="auto" pt="0" mt={["0", "0"]}>
      <Search display={{ md: "none" }} mt="4" />

      <Box
        w="100%"
        h={["auto", "250px", "250px"]}
        mt={["6", "4"]}
        rounded="md"
        overflow="hidden"
      >
        <Carousel />
      </Box>

      <Box
        w="100%"
        h="auto"
        py="4"
        mt="6"
        border={"1px"}
        borderColor="gray.100"
        bgColor="white"
      >
        <Flex h="100%" w="100%" justify="space-evenly" align="center">
          <Link to={"/category/fashion"}>
            <Stack spacing="0">
              <Box
                bgColor="blue.500"
                h={["44px", "80px"]}
                w={["44px", "80px"]}
                rounded="50%"
                display="grid"
                placeItems="center"
              >
                <Icon as={FaTshirt} boxSize={["6", "12"]} color="white" />
              </Box>
              <Text textAlign="center" fontSize={["14px", "16px"]}>
                Fashion
              </Text>
            </Stack>
          </Link>
          <Link to={"/category/gaming"}>
            <Stack spacing="0">
              <Box
                bgColor="yellow.500"
                h={["44px", "80px"]}
                w={["44px", "80px"]}
                rounded="50%"
                display="grid"
                placeItems="center"
              >
                <Icon as={FaGamepad} boxSize={["6", "12"]} color="white" />
              </Box>
              <Text textAlign="center" fontSize={["14px", "16px"]}>
                Gaming
              </Text>
            </Stack>
          </Link>

          <Link to={"/category/phones"}>
            <Stack spacing="0">
              <Box
                bgColor="green.500"
                h={["44px", "80px"]}
                w={["44px", "80px"]}
                rounded="50%"
                display="grid"
                placeItems="center"
              >
                <Icon as={FaMobileAlt} boxSize={["6", "12"]} color="white" />
              </Box>
              <Text textAlign="center" fontSize={["14px", "16px"]}>
                Phones
              </Text>
            </Stack>
          </Link>
          <Link to={"/category/laptops"}>
            <Stack spacing="0">
              <Box
                bgColor="orange.500"
                h={["44px", "80px"]}
                w={["44px", "80px"]}
                rounded="50%"
                display="grid"
                placeItems="center"
              >
                <Icon as={FaLaptop} boxSize={["6", "12"]} color="white" />
              </Box>
              <Text textAlign="center" fontSize={["14px", "16px"]}>
                Laptops
              </Text>
            </Stack>
          </Link>
        </Flex>
      </Box>

      <Box mt="6">
        <Text fontWeight="medium" mb="3">
          Top Deals
        </Text>

        <Grid
          w="100%"
          h="auto"
          py="4"
          px={["0", "4"]}
          border={"1px"}
          borderColor="gray.100"
          bgColor="white"
          templateColumns={["repeat(3,1fr)", "repeat(4,1fr)"]}
          gap={1}
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.prods,
});

export default connect(mapStateToProps, { getAllProducts })(Home);
