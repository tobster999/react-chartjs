// entry point for react app loaded from index.html

// react allows one to write jsx, 
// which is a syntax extension that allows one to write html-like code in javascript
// react-dom is the package that allows react to render to the dom (document object model) of the browser

import React from "react";
import ReactDOM from "react-dom/client";
// import app and styling
import { App } from "./App.jsx";
import "./index.css";

// getElementById finds the HTML element with id of "root" in index.html, 
// and ReactDOM.createRoot creates a root for the react app to render into
ReactDOM.createRoot(document.getElementById("root")).render(
  // strict mode helps catch common mistakes in dev
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
