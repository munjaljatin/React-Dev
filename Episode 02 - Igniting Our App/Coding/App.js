const root = document.getElementById("root");

console.log(root);

const newElement = document.createElement("h1");
newElement.innerText = "Server is Live!";
root.appendChild(newElement);

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h2",
  { className: "heading-2" },
  React.createElement(
    "i",
    { className: "italic-text" },
    "Importing the React from react! Isn't it 🚀"
  )
);

const mainRoot = ReactDOM.createRoot(root);
console.log(mainRoot);

mainRoot.render(heading1);
