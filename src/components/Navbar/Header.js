import React, { useState } from "react";
import { Logo } from "./Logo";
import { connect } from "react-redux";
import { Flex, Stack, useDisclosure } from "@chakra-ui/react";
import MobileDrawer from "./MobileDrawer";
import { NavBarContainer } from "./NavBarContainer";
import { Toggle } from "./Toggle";
import { Search } from "../Search/Search";
import { Cart } from "../Cart/Cart";
import ProfileIcon from "./ProfileIcon";

const Header = ({ cartCount }) => {
  const [isAuthenticated] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => onOpen();

  return (
    <NavBarContainer>
      <Flex align="center" justify="space-between" w="auto">
        {" "}
        <Toggle toggle={handleClick} />
        <Logo w="100px" color={["black"]} pl={{ base: "4", md: "8" }} />
      </Flex>
      <Search display={{ base: "none", md: "block" }} />
      <Stack direction="row" spacing={["4"]} pr={["0", "4"]}>
        <ProfileIcon />
        <Cart count={cartCount} color="yellow.500" mr={["0", "4"]} />
      </Stack>
      <MobileDrawer
        isOpen={isOpen}
        onClose={onClose}
        isLoggedIn={isAuthenticated}
      />
    </NavBarContainer>
  );
};

const mapStateToProps = (state) => ({
  cartCount: state.cart.cartQuantity,
});

export default connect(mapStateToProps)(Header);
