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
  <ThirdwebProvider activeChain="sepolia" clientId="f326977a26cf4d78024ab670b2f6a348">
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);