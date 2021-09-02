import React, { useState } from "react";
import {
  Icon,
  InputGroup,
  Input,
  Container,
  FormControl,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const Search = ({ ...props }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setKeyword(value);
  };

  return (
    <Container mt="2" {...props}>
      <FormControl>
        <InputGroup>
          <Input
            // h={["36px", "auto"]}
            onChange={handleSearch}
            type="text"
            placeholder="search by product or category... "
            roundedLeft="full"
            fontWeight="light"
            borderColor="yellow.400"
            bgColor="white"
            _hover={{ borderColor: "yellow.500" }}
            _focus={{ borderColor: "yellow.600" }}
          />
          <Link to={`/search?q=${keyword}`}>
            <Button
              roundedRight="full"
              type="submit"
              backgroundColor="yellow.500"
            >
              <Icon as={FaSearch} color="white" />
            </Button>
          </Link>
        </InputGroup>
      </FormControl>
    </Container>
  );
};
