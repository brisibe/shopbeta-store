import React, { useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Select,
  Stack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "../components/Button/Button";
import { useFormik } from "formik";
import { createProduct } from "../actions/products";
import { connect } from "react-redux";
import SellerProduct from "../components/Cards/SellerProduct";

export const SellerProfile = ({ seller, createProduct, products }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { storename, email } = seller;
  const fileInput = useRef();

  const sellerProducts = products.filter(
    (prod) => prod.sellerName === storename
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "Laptops",
      description: "",
      price: "",
    },
    onSubmit: (value) => {
      createProduct(value);

      onClose();
    },
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
            {storename}
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
          {/* <Text mx="4" mt="2" fontSize="16px" fontWeight="medium">
           New Products
          </Text>
          <Divider /> */}

          <Stack mx="4" mt="2">
            {/* <Text>Mobile: 08023848484</Text>
            <Text>
              Address: no. 3, ladipo street, victoria island Lagos, Nigeria
            </Text> */}
            <Button bgColor="yellow.500" mt="6" onClick={onOpen}>
              Add new Product
            </Button>
            <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Product</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <FormControl id="name" isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Iphone 12"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                    </FormControl>

                    <FormControl id="category">
                      <FormLabel>Category</FormLabel>
                      <Select
                        id="category"
                        name="category"
                        // placeholder="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                      >
                        <option value="Laptops">Laptops</option>
                        <option value="Phones">Phones</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Fashion">Fashion</option>
                      </Select>
                    </FormControl>

                    <FormControl id="photo" isRequired>
                      <FormLabel>Photo</FormLabel>
                      <Input
                        type="file"
                        id="photo"
                        accept=".jpg, .png"
                        name="photo"
                        // placeholder="fashola street, gwagalada, Lagos state."
                        onChange={(event) => {
                          formik.setFieldValue("photo", event.target.files[0]);
                        }}
                        ref={fileInput}
                      />
                    </FormControl>

                    <FormControl id="description" isRequired>
                      <FormLabel>Description</FormLabel>
                      <Input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Iphone xs max pro overload. Comes with ..."
                        onChange={formik.handleChange}
                        value={formik.values.description}
                      />
                    </FormControl>
                    <FormControl id="price" isRequired>
                      <FormLabel>price</FormLabel>
                      <Input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="5000"
                        onChange={formik.handleChange}
                        value={formik.values.price}
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
                      Add Product
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

      <Heading size="md" mt="6" mx="4" mb="3">
        Your Products
      </Heading>

      <Stack direction={["column", "row"]} width="100%" height="auto">
        {sellerProducts.length === 0 ? (
          <Text mx="4" mt="4">
            You haven't added any product yet...
          </Text>
        ) : (
          sellerProducts.map((prod) => (
            <SellerProduct product={prod} key={prod.productId} />
          ))
        )}
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  seller: state.auth.user,
  products: state.products.prods,
});

export default connect(mapStateToProps, { createProduct })(SellerProfile);
