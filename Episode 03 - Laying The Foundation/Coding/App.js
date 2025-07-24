import { createElement } from "react";
import ReactDOM from "react-dom/client";

const span = createElement(
  "span",
  {
    id: "text",
    className: "inline-text",
    key: 1,
  },
  "This is span tag"
);

const root = document.getElementById("root");
console.log(root);

const mainRoot = ReactDOM.createRoot(root);
mainRoot.render(span);
