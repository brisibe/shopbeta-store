import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import React from "react";
import { Button } from "../components/Button/Button";

export const Profile = ({ user }) => {
  const { username, email } = user;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      phone: "",
      address: "",
    },
    onSubmit: (value) => {},
  });

  return (
    <Box w="100%" h="100%" minH="100vh" mb={"5"}>
      <Flex direction={["column", "row"]} width="100%">
        <Box
          w={["90%", "60%"]}
          h={["150px", "200px"]}
          bgColor="white"
          m="3"
          rounded="md"
        >
          <Heading fontWeight="medium" fontSize="28px" m="4" color="yellow.500">
            Welcome, {username}
          </Heading>
          <Text m="4" fontSize="18px">
            {email}
          </Text>
        </Box>
        <Box
          w={["90%", "40%"]}
          h={["150px", "200px"]}
          bgColor="white"
          m="3"
          rounded="md"
        >
          <Text mx="4" mt="2" fontSize="16px" fontWeight="medium">
            Shipping address
          </Text>
          <Divider />

          <Stack mx="4" mt="2">
            <Button bgColor="yellow.500" mt="6" onClick={onOpen}>
              New Shipping Address
            </Button>
            <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Shipping Address</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <FormControl id="phone">
                      <FormLabel>Phone</FormLabel>
                      <Input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="08101919191"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                    </FormControl>

                    <FormControl id="address">
                      <FormLabel>Address</FormLabel>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="fashola street, gwagalada, Lagos state."
                        onChange={formik.handleChange}
                        value={formik.values.address}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="yellow.500"
                      bgColor="yellow.500"
                      mr={3}
                      type="submit"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={onClose}
                      _focus={{ boxShadow: "none" }}
                      _hover={{ backgroundColor: "white" }}
                      _active={{ backgroundColor: "white" }}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>
          </Stack>
        </Box>
      </Flex>

      <Heading size="md" mt="6" mx="4">
        Your Orders
      </Heading>

      <Text mx="4" mt="4">
        You haven't made any order yet...
      </Text>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
