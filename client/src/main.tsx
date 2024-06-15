import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import App from "./App";
import "./index.css";

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