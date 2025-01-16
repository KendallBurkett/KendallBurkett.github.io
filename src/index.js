import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css"; // Import the CSS file here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Ensure your `public/index.html` contains a div with `id="root"`
);