import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//@ts-ignore
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //@ts-ignore
  <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);