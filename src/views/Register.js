import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { useFormik } from "formik";
import { validate } from "./SellerRegistrations";
import { connect } from "react-redux";
import { registerBuyer, login } from "../actions/auth";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-top: 64px;
  display: grid;
  place-items: center;

  input {
    margin-bottom: 8px;
  }
  a {
    color: #d69e2e;
  }
`;

const Register = ({ registerBuyer, login, isAuthenticated, dispatch }) => {
  const [isLoading, SetLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      SetLoading(true);
      const res = await registerBuyer(values);
      if (res !== null) {
        SetLoading(false);
      }
    },
  });

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <Container>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="username"
              placeholder="Joseph"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
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
  isAuthenticated: state.auth.authenticatedUser,
});

export default connect(mapStateToProps, { registerBuyer, login })(Register);
