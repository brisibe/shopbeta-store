import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      w={"100%"}
      h={["90px"]}
      textAlign="center"
      bgColor={"black"}
      color={"white"}
      py={4}
      mt={12}
    >
      <Text textDecor="underline">
        <Link to={"/register/seller"}> Become a Seller</Link>
      </Text>
      <Text>Made by Joseph Brisibe</Text>
    </Box>
  );
};
