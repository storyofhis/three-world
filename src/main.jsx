import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let canvas = document.getElementById("root").canvas;
// canvas.addEventListener(
//   // "load",
//   "selectstart",
//   function (e) {
//     e.preventDefault();
//     render(
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     );
//   },
//   null
// );
