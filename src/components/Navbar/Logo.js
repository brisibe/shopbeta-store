import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = (props) => {
  return (
    <Box {...props} w="auto">
      <Link to={"/"}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          letterSpacing={"wide"}
          color="yellow.400"
        >
          SHOPBETA
        </Text>
      </Link>
    </Box>
  );
};
