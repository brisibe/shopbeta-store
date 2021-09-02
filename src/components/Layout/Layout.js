import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../Navbar/Header";
import SideNav from "../SideNav/SideNav";
import { Footer } from "../Footer/Footer";
import Alert from "../Alert/Alert";

export const Layout = ({ children }) => {
  return (
    <Box w="100%" h="auto" bgColor="#F5F5F5">
      <Header />

      <Flex px="4">
        <Box width="20%" h="100%" display={{ base: "none", md: "block" }}>
          <Box
            bgColor="white"
            width="18%"
            pt={10}
            m={2}
            h={["50%", "auto", "73%"]}
            zIndex="0"
            display={{ base: "none", md: "block" }}
            rounded="md"
            px="6"
            position="fixed"
            border="1px"
            borderColor="gray.100"
            overflowY={{ sm: "scroll", md: "hidden" }}

            // overflow={{ md: "scroll", lg: "scroll", xl: "hidden" }}
          >
            <SideNav />
          </Box>
        </Box>

        <Box
          pt="2"
          height="auto"
          width="80%"
          fontSize={["14px", "16px", "16px"]}
          pl={["0", "2", "2"]}
          flexGrow="1"
          minHeight="100vh"
        >
          <Alert />

          {children}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};
