import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import React from "react";
import { Button } from "../components/Button/Button";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin-top: 64px;
  display: grid;
  place-items: center;

  input {
    margin-bottom: 8px;
  }
`;

const ResetPassword = () => {
  return (
    <Wrapper>
      <Container>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="example@gmail.com" />
        </FormControl>

        <Button
          type="sumbit"
          w="100%"
          mt={8}
          bgColor="yellow.500"
          color="white"
        >
          Reset
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ResetPassword;
