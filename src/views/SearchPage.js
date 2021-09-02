import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { SearchResultCard } from "../components/Cards/SearchResultCard";
import { Search } from "../components/Search/Search";
// import { products } from "../Products";

export const SearchPage = ({ products }) => {
  const { search } = useLocation();
  const keyword = search.split("=")[1];

  return (
    <Box w="100%" h="auto">
      <Search display={{ md: "none" }} pb="6" />
      <Box w="100%" h="auto" p={["2", "8"]}>
        <Heading fontWeight="medium" fontSize={["18px", "24px"]} pb="8">
          Search results
        </Heading>

        <Flex direction="column">
          {keyword.length < 2 && keyword.match("") ? (
            <p>Sorry, product not found</p>
          ) : (
            products
              .filter(
                (product) =>
                  product.name.toLowerCase().includes(keyword) |
                  product.category.toLowerCase().includes(keyword)
              )
              .map((product) => (
                <SearchResultCard key={product.productId} product={product} />
              ))
          )}
        </Flex>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  products: state.products.prods,
});

export default connect(mapStateToProps)(SearchPage);
