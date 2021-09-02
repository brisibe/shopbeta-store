import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuItem = ({
  children,
  isLast,
  link = "/",
  handler,
  ...props
}) => {
  return (
    <Link to={link}>
      <Text display="block" {...props}>
        {children}
      </Text>
    </Link>
  );
};
