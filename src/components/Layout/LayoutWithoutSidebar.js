import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Alert from "../Alert/Alert";
import { Footer } from "../Footer/Footer";
import Header from "../Navbar/Header";

export const LayoutWithoutSidebar = ({ children }) => {
  return (
    <Box w="100%" h="auto" bgColor="#F5F5F5">
      <Header />

      <Flex px="4" direction="column">
        <Alert />

        <Box
          pt="2"
          height="auto"
          width="100%"
          fontSize={["14px", "16px", "16px"]}
          pl={["0", "2", "2"]}
          minHeight="100vh"
        >
          {children}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};
