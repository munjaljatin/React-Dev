/*
parcel is reponsible for
- Dev Builds
- local server
- HMR => Hot Module Replacement
- File watcher algorithms => written in c++
- Caching => Faster Builds
- Image Optimization
- Minificataion
- Bundle
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling => To Support Older Browsers
- Diagnostics
- Better Error Handling
- Support HTTPs in Dev Mode
- Tree Shaking - Removes unused code
- Different Dev and Production Bundles

*/

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
