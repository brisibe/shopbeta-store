import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Stack,
  Heading,
  Flex,
  DrawerFooter,
  Text,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  FaTimes,
  FaTshirt,
  FaGamepad,
  FaMobileAlt,
  FaLaptop,
  FaSignInAlt,
  FaLock,
  FaSignOutAlt,
  FaCartPlus,
} from "react-icons/fa";
import { connect } from "react-redux";
import { MenuItem } from "./MenuItem";
import { logout } from "../../actions/auth";

const MobileDrawer = ({ isOpen, onClose, isLoggedIn, logout }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton
            _focus={{ boxShadow: "none" }}
            _hover={{ backgroundColor: "white" }}
            _active={{ backgroundColor: "white" }}
          >
            <Icon as={FaTimes} h="20px" w="20px" color="gray.800" />
          </DrawerCloseButton>

          <DrawerBody color="gray.700" mt={8}>
            <Stack spacing={"3"} pb="8" pt="4">
              <Heading size="xs" color="yellow.500">
                Categories
              </Heading>

              <Divider />
              <Flex align="center">
                <FaTshirt />{" "}
                <MenuItem onClick={onClose} pl={"2"} link={"/category/fashion"}>
                  Fashion
                </MenuItem>
              </Flex>
              <Flex align="center">
                <FaGamepad />{" "}
                <MenuItem onClick={onClose} pl={"2"} link={"/category/gaming"}>
                  Gaming
                </MenuItem>
              </Flex>
              <Flex align="center">
                <FaMobileAlt />{" "}
                <MenuItem onClick={onClose} pl={"2"} link={"/category/phones"}>
                  Phones
                </MenuItem>
              </Flex>
              <Flex align="center">
                <FaLaptop />{" "}
                <MenuItem onClick={onClose} pl={"2"} link={"/category/laptop"}>
                  Laptops
                </MenuItem>
              </Flex>
            </Stack>
            {isLoggedIn && (
              <Stack spacing={3} pb="8">
                <Heading size="xs" color="yellow.500" onClick={onClose}>
                  Profile
                </Heading>
                <Divider />
                <Flex align="center">
                  <FaCartPlus />{" "}
                  <MenuItem onClick={onClose} pl={"2"} link={"/customer"}>
                    My Orders
                  </MenuItem>
                </Flex>
              </Stack>
            )}
            <Stack spacing={3} pb="8">
              <Heading size="xs" color="yellow.500" onClick={onClose}>
                Account
              </Heading>
              <Divider />

              {isLoggedIn ? (
                <Flex align="center">
                  <FaSignOutAlt />{" "}
                  <MenuItem
                    onClick={() => {
                      Promise.resolve(logout()).then(onClose());
                    }}
                    pl={"2"}
                    link={"/"}
                  >
                    Logout
                  </MenuItem>
                </Flex>
              ) : (
                <>
                  <Flex align="center">
                    <FaLock />{" "}
                    <MenuItem onClick={onClose} pl={"2"} link={"/register"}>
                      Create Account
                    </MenuItem>
                  </Flex>
                  <Flex align="center">
                    <FaSignInAlt />{" "}
                    <MenuItem onClick={onClose} pl={"2"} link={"/login"}>
                      Login
                    </MenuItem>
                  </Flex>
                </>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Text>please wear a mask</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { logout })(MobileDrawer);
