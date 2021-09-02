import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartIcon = ({ ...props }) => <Icon as={FaShoppingCart} {...props} />;

export const Cart = ({ count, ...props }) => {
  return (
    <Link to={"/cart"}>
      <Avatar
        icon={<CartIcon color="white" />}
        boxSize="8"
        bg="inherit"
        {...props}
      >
        {count > 0 && (
          <AvatarBadge
            bg="yellow.500"
            boxSize="1.25em"
            color="white"
            fontSize={["sm", "md"]}
            mb="6"
            border="none"
          >
            {count}
          </AvatarBadge>
        )}
      </Avatar>
    </Link>
  );
};
