import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./hooks/useScrollToTheTop";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import { Provider } from "react-redux";
import ReduxStore from "./store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = ReduxStore;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
