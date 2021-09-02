import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  FaAlignJustify as MenuIcon,
  FaTimes as CloseIcon,
} from "react-icons/fa";

export const Toggle = ({ toggle, isOpen }) => {
  return (
    <Icon display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <Icon as={CloseIcon} color="white" size="24px" />
      ) : (
        <Icon as={MenuIcon} color="white" size="24px" />
      )}
    </Icon>
  );
};
