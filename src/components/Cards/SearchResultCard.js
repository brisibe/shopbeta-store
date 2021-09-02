import { Image } from "@chakra-ui/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Button/AddToCart";

export const SearchResultCard = ({ product }) => {
  const { productId, name, sellerName, price, photo } = product;

  const productPath = name.split(" ").join("-").toLowerCase();

  return (
    <Box
      p={2}
      w="100%"
      h="auto"
      mb="4"
      key={productId}
      borderColor="gray.100"
      bgColor="white"
      rounded="8px"
    >
      <Link
        to={{
          pathname: `/${productPath}`,
          state: { prodId: productId },
        }}
      >
        <Stack direction="row" spacing={["2", "-2"]}>
          <Box
            h={["103px", "206px"]}
            w={["203px", "308px"]}
            rounded="8px"
            overflow="hidden"
          >
            <Image src={photo} w={["203px", "280px"]} h={["100px", "206px"]} />
          </Box>
          <Stack direction="column" w="70%" spacing={["0", "1"]} pt={[2, 4]}>
            <Text
              fontSize={["14px", "18px"]}
              lineHeight="1"
              _hover={{ textDecor: "underline" }}
            >
              {name}
            </Text>
            <Flex align="center">
              <Text fontSize="12px" pr="2">
                Seller:{" "}
              </Text>
              <Text fontWeight="medium" fontSize="12px" color="yellow.600">
                {`  ${sellerName}`}
              </Text>
            </Flex>

            <Text fontSize={["18px", "24px"]} fontWeight="medium">
              &#8358; {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          </Stack>
        </Stack>
      </Link>
      <Flex justify="flex-end">
        <AddToCart product={product}>Add to cart</AddToCart>
      </Flex>
    </Box>
  );
};
