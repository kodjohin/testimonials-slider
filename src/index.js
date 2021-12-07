import "./App.css";
import App from "./App";
import React from "react";
import reactDom from "react-dom";

reactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.querySelector("#root")
)