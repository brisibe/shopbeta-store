import { Flex } from "@chakra-ui/layout";
import React from "react";

export const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      w="100%"
      h={["62px", "70px", "72px"]}
      px={4}
      bgColor="black"
      zIndex="banner"
      position="sticky"
      top="0"
      {...props}
    >
      {children}
    </Flex>
  );
};
