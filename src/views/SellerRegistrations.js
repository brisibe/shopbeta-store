import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { registerSeller } from "../actions/auth";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-top: 64px;
  display: grid;
  place-items: center;

  a {
    color: #d69e2e;
  }
`;

export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "password must not be less than letters";
  }

  return errors;
};

const SellerRegistrations = ({ isAuthenticated, registerSeller }) => {
  const [isLoading, SetLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      storeName: "",
      email: "",
      password: "",
      address: "",
    },
    validate,
    onSubmit: async (values) => {
      SetLoading(true);
      const res = await registerSeller(values);
      if (res !== null) {
        SetLoading(false);
      }
    },
  });

  if (isAuthenticated) {
    return <Redirect to="/seller" />;
  }

  return (
    <Wrapper>
      <Text pb="8" fontWeight="medium" fontSize="18px">
        Seller{" "}
      </Text>
      <Container>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="jojo"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </FormControl>
          <FormControl id="storeName" isRequired>
            <FormLabel>Store Name</FormLabel>
            <Input
              type="text"
              id="storeName"
              name="storeName"
              placeholder="Chimex"
              onChange={formik.handleChange}
              value={formik.values.storeName}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              placeholder="e.g Gwagalada close, Garki, Lagos State"
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </FormControl>
          {isLoading ? (
            <Button
              isLoading
              type="sumbit"
              w="100%"
              mt={8}
              bgColor="yellow.500"
              color="white"
            >
              Register
            </Button>
          ) : (
            <Button
              type="sumbit"
              w="100%"
              mt={8}
              bgColor="yellow.500"
              color="white"
            >
              Register
            </Button>
          )}
        </form>

        <Flex justify="center" mt={8}>
          <Text fontSize="14px">
            Already have an account? <Link to="/login">Login</Link>
          </Text>
        </Flex>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { registerSeller })(
  SellerRegistrations
);
