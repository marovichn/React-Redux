import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureStore from "./hooks-store/products-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//configure init prod store
const configuration = configureStore();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
