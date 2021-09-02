import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";
import React from "react";

export const NumInput = () => {
  return (
    <NumberInput size="md" maxW={20} defaultValue={1} min={1}>
      <NumberInputField />
      <NumberInputStepper w="9">
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
