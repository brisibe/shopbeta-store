import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Images/Image";

export const ProductCard = ({ product }) => {
  const { productId, name, price, photo } = product;

  const productPath = name.split(" ").join("-").toLowerCase();

  return (
    <Box w="100%" h={["120px", "200px"]} px={2} my={2} shadow={["sm", "md"]}>
      <Link
        to={{
          pathname: `/${productPath}`,
          state: { prodId: productId },
        }}
      >
        <Flex w="100%" h="100%" direction="column" justify="space-evenly">
          <Image src={photo} w="100%" h="60%" />

          <Box w="100%" h="fit-content">
            <Text
              lineHeight={1}
              fontSize={["10px", "16px"]}
              fontWeight="medium"
            >
              {name}
            </Text>
          </Box>
          <Text fontWeight="medium" fontSize={["12px", "16px"]} pt="1">
            {" "}
            &#8358; {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
