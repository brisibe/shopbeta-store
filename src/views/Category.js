import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { SearchResultCard } from "../components/Cards/SearchResultCard";
import { Search } from "../components/Search/Search";

const Category = ({ products }) => {
  const { name } = useParams();

  return (
    <Box w="100%" h="auto">
      <Search display={{ md: "none" }} pb="6" />
      <Box w="100%" h="auto" p={["2", "8"]}>
        <Heading fontWeight="medium" fontSize={["18px", "24px"]} pb="8">
          {name.toUpperCase()}
        </Heading>

        <Flex direction="column">
          {products
            .filter((product) => product.category.toLowerCase() === name)
            .map((val) => (
              <SearchResultCard product={val} key={val.productId} />
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.prods,
});
export default connect(mapStateToProps)(Category);
