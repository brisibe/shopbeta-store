import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
// import { validate } from "./SellerRegistrations";

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { addAlertWithTimout } from "../actions/alert";
// import * as Yup from "yup";

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

const Login = ({
  isLoggedIn,
  errors,
  login,
  addAlertWithTimout,
  dispatch,
  history,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      const { email, password } = value;
      setIsLoading(true);
      const res = await login(email, password);

      if (res !== null) {
        setIsLoading(false);
      }
    },
  });

  if (errors) {
    setIsLoading(false);
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <Container>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </FormControl>
          <Flex justify="flex-end">
            <Text fontSize="12px" opacity="0.7">
              Forgot password? <Link to="/reset">Reset</Link>
            </Text>
          </Flex>

          {isLoading ? (
            <Button
              isLoading
              type="sumbit"
              w="100%"
              mt={8}
              bgColor="yellow.500"
              color="white"
            >
              Login
            </Button>
          ) : (
            <Button
              type="sumbit"
              w="100%"
              mt={8}
              bgColor="yellow.500"
              color="white"
            >
              Login
            </Button>
          )}
        </form>

        <Flex justify="center" mt={14}>
          <Text fontSize="14px">
            Don't have an account? <Link to="/register">Register</Link>
          </Text>
        </Flex>
      </Container>
    </Wrapper>
  );
};
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  errors: state.auth.error,
});

export default connect(mapStateToProps, { login, addAlertWithTimout })(Login);
