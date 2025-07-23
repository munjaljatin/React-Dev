const container = document.getElementById("root");
const mainRoot = ReactDOM.createRoot(container);

console.log(mainRoot);

const heading1 = React.createElement(
  "h1",
  { className: "heading1" },
  "This h1 created using the React.createElement()"
);

mainRoot.render(heading1);

const complexElement = React.createElement(
  "div",
  { className: "imageContainer" },
  React.createElement("img", {
    src: "https://images.unsplash.com/photo-1753150972975-0524f7f24888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    alt: "butterfly",
    width: "300px",
  })
);

mainRoot.render(complexElement);

const nestedElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h3", { key: 1 }, "React is a Javascript Library."),
    React.createElement("h4", { key: 2 }, "This is H4"),
    React.createElement("img", {
      src: "https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
      key: 3,
    }),
  ])
);

mainRoot.render(nestedElement);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h2", {}, "This is h2 inside child1"),
      React.createElement("h3", {}, "This is h3 inside the child1"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "This is h2 inside child2"),
    React.createElement("h3", {}, "This is h3 inside the child2"),
  ])
);

mainRoot.render(parent);
