import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/alert";

const CheckoutAlert = () => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Order Successful
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Wow, just like that? In a real scenerio you know you'd input your pickup
        address and pay for your orders right?. lol
      </AlertDescription>
    </Alert>
  );
};

//Todo:
// redirect to home screen after checkout closed
// fix spinners after login fails
// redirect to home after register

export default CheckoutAlert;
