import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Loader from "./Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Loader />
    <App />
  </React.StrictMode>
);
