import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { LayoutWithoutSidebar } from "../Layout/LayoutWithoutSidebar";

// This hack was done in order to Create two seperate layers for Router

export const RouteWithLayout = ({ withSidebar = true, children, ...rest }) => {
  const LayeredRoute = withSidebar ? (
    <Route
      {...rest}
      render={(props) => <Layout {...props}>{children}</Layout>}
    />
  ) : (
    <Route
      {...rest}
      render={(props) => (
        <LayoutWithoutSidebar {...props}>{children}</LayoutWithoutSidebar>
      )}
    />
  );

  return LayeredRoute;
};
