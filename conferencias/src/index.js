import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
