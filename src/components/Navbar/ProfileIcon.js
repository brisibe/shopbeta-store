import { Avatar } from "@chakra-ui/avatar";
import { Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProfileIcon = ({ loggedIn, user }) => {
  let path;

  const name = user === null ? "guest" : user.username;

  if (loggedIn && user.isSeller) {
    path = "/seller";
  } else if (loggedIn && !user.isSeller) {
    path = "/customer";
  } else if (user === null) {
    path = "/login";
  }

  return (
    <Stack direction="row" align="center">
      <Text color="white" fontSize="12px" mr={-1.5}>
        Hi, {name}
      </Text>
      <Link to={path}>
        <Avatar boxSize={["1.2em", "1.3em"]} bg="inherit" />
      </Link>
    </Stack>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileIcon);
