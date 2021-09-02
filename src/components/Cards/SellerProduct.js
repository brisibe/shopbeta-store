import { Box, Flex, Image, Stack, Text, Button } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/products";

const SellerProduct = ({ product, deleteProduct }) => {
  const { productId, photo, name, price, sellerName } = product;
  const handleDelete = () => {
    deleteProduct(productId, name);
  };

  return (
    <Box
      p={2}
      w={["100%", "30%"]}
      h="100%"
      mb="4"
      key={productId}
      borderColor="gray.100"
      bgColor="white"
      rounded="8px"
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
      <Flex justify="flex-end">
        <Button
          variant="solid"
          _hover={{ backgroundColor: "gray.300" }}
          _active={{ backgroundColor: "gray.300" }}
          _focus={{ boxShadow: "none" }}
          onClick={handleDelete}
        >
          Delete{" "}
        </Button>
      </Flex>
    </Box>
  );
};

export default connect(null, { deleteProduct })(SellerProduct);
