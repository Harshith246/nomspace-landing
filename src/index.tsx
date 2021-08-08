import "react-app-polyfill/stable";
import "@celo-tools/use-contractkit/lib/styles.css";
import "react-toastify/dist/ReactToastify.min.css";
import "@szhsin/react-menu/dist/index.css";
import "src/index.css";

import { ContractKitProvider } from "@celo-tools/use-contractkit";
import React from "react";
import ReactDOM from "react-dom";
import theme from "src/theme";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ContractKitProvider
      dapp={{
        name: "Nomspace",
        description: "Protocol for name registration",
        url: "https://app.nom.space",
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ContractKitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
