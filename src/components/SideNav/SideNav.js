import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { connect } from "react-redux";
import React from "react";
import { FaSignInAlt, FaLock, FaSignOutAlt, FaCartPlus } from "react-icons/fa";
import { navigation } from "../../navigation-links";
import { MenuItem } from "../Navbar/MenuItem";
import { logout } from "../../actions/auth";

const GuestUserNav = (
  <Stack spacing={3} pb="8">
    <Heading size="xs" color="yellow.500">
      Account
    </Heading>
    <Divider />

    <Flex align="center">
      <FaLock />{" "}
      <MenuItem pl={"2"} link={"/register"}>
        Signup
      </MenuItem>
    </Flex>
    <Flex align="center">
      <FaSignInAlt />{" "}
      <MenuItem pl={"2"} link={"/login"}>
        Login
      </MenuItem>
    </Flex>
  </Stack>
);

const SideNav = ({ isLoggedIn, logout, ...props }) => {
  return (
    <Box {...props}>
      <Stack spacing={"3"} pb="8" pt={["4"]}>
        <Heading size="xs" color="yellow.500">
          Categories
        </Heading>

        <Divider />
        {navigation.map((nav, index) => (
          <Flex align="center" key={index}>
            {nav.icon}{" "}
            <MenuItem pl={"2"} link={`/category${nav.url}`}>
              {nav.name}
            </MenuItem>
          </Flex>
        ))}
      </Stack>

      {isLoggedIn ? (
        <>
          <Stack spacing={3} pb="8">
            <Heading size="xs" color="yellow.500">
              Profile
            </Heading>
            <Divider />
            <Flex align="center">
              <FaCartPlus />{" "}
              <MenuItem pl={"2"} link={"/customer"}>
                My Orders
              </MenuItem>
            </Flex>
          </Stack>

          <Stack spacing={3} pb="8">
            <Heading size="xs" color="yellow.500">
              Account
            </Heading>
            <Divider />

            <Flex align="center">
              <FaSignOutAlt />{" "}
              <MenuItem pl={"2"} link={"/logout"} onClick={logout}>
                Logout
              </MenuItem>
            </Flex>
          </Stack>
        </>
      ) : (
        GuestUserNav
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { logout })(SideNav);
