import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //@ts-ignore
  <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);