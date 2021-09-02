import React from "react";
import { Alert as AlertChakra, AlertIcon } from "@chakra-ui/react";
import { connect } from "react-redux";
import Proptype from "prop-types";

const Alert = ({ message, status, ...props }) => {
  return (
    <AlertChakra
      status={status}
      position="sticky"
      top="24"
      zIndex={1}
      {...props}
    >
      <AlertIcon />
      {message}
    </AlertChakra>
  );
};

const AlertContainer = ({ alerts }) => {
  if (alerts === null || alerts.length < 1) {
    return null;
  }

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert, index) => (
      <Alert message={alert.message} status={alert.status} key={index} />
    ))
  );
};

AlertContainer.prototype = {
  alerts: Proptype.array,
};

const mapStateToProps = (state) => ({
  alerts: state.alert.alerts,
});

export default connect(mapStateToProps)(AlertContainer);
