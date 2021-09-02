import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ children, ...props }) => {
  return (
    <ChakraButton
      _focus={{ boxShadow: "none" }}
      _hover={{ backgroundColor: "yellow.500" }}
      _active={{ backgroundColor: "yellow.700" }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};
