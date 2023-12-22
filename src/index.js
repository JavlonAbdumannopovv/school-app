import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./config/theme.config";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
