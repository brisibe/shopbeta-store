import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        lineHeight: "tall",
        backgroundColor: "white",

        width: "100%",
        // minH: "100vh",
      },
    },
  },
});
