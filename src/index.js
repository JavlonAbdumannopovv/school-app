import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { theme } from "./config/theme.config";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import "./styles/index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </ChakraProvider>
);
