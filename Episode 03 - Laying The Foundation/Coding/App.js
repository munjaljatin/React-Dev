import React, { createElement, Fragment } from "react";
import ReactDOM from "react-dom/client";

// creating an JS object
const gimli = {
  name: "gimli",
  weapon: "axe",
  greeting: function () {
    return `Hi, my name is ${this.name}`;
  },
};

console.log(gimli.greeting());

// creating an React Element
const element = <h1>This is an Heading 1 tag</h1>;

// creating a functional component
const FirstComponent = () => <h2>This is an Heading 2 Tag.</h2>;

const SecondComponent = () => (
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eos?
    </p>
    <h2>this is an heading 2</h2>
    <MyButton />
    <Header />
    <Section />
    <Section />
    <Footer />
  </div>
);

function MyButton() {
  return <button>This is button tag</button>;
}

function Header() {
  return (
    <div className="nav-container">
      <div className="left">
        <h2>Jatin Munjal</h2>
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
}

const Section = () => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        esse?
      </p>
      <a href="https://google.com">Go to Google</a>
      <br /> <br />
    </>
  );
};

const Footer = function () {
  return (
    <Fragment>
      <span>this is a span</span>
    </Fragment>
  );
};
const root = document.getElementById("root");
console.log(root);

// Episode 3 - Laying the foundation
// Laying the foundation of functional components
// React Element
const Ele1 = <a href="https://taniarascia.com">Developer</a>;

// React Functional Component => React functional component is just a normal javascript function that returns tha JSX(JavaScript XML)
const Paragraph = () => {
  return (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
      placeat nulla eius sit quis illo veritatis id repudiandae ut repellat
      error ipsum, ea enim quas nemo voluptates aspernatur iusto ducimus?
    </p>
  );
};

const Inline = () => {
  return (
    <div>
      <span>this is span tag returned by the span function component</span>
      <Paragraph />
    </div>
  );
};

// Single line functional component

const MainHeading = () => <h1>Main Heading</h1>;
const MainButton = () => (
  <button style={MainButtonStyles} onClick={handleButtonClick}>
    Click Me
  </button>
);

function randomNumberGenerator() {
  return Math.floor(Math.random() * 255);
}

const handleButtonClick = () => {
  console.log("You Clicked the button!");
  root.style.backgroundColor = `rgb(${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()})`;
  console.log(randomNumberGenerator());
};

const MainButtonStyles = {
  display: "block",
  height: "30px",
  backgroundColor: "transparent",
  border: "1px solid green",
  width: "100px",
  // color: "white",
  borderRadius: "15px",
};

const SingleLineFunctionalComponent = () => (
  <img src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" />
);

// Multi Line Functional Component
const MultiLineFunctionalComponent = () => (
  <div className="main-wrapper">
    <MainHeading />
    <img
      src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
      alt="image"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, obcaecati?
    </p>
    <SingleLineFunctionalComponent />
    <Division />
    {Ele1}
  </div>
);

const divisonStyles = {
  display: "flex",
  gap: "15px",
};

const Division = () => {
  return (
    <div className="button-container" style={divisonStyles}>
      {/* convention 1 - to render functional component */}
      <MainButton />
      <MainButton />
      <MainButton />
      <MainButton />
      {/* <MultiLineFunctionalComponent /> */}
      {/* convention 2 - to render functional component */}
      <MainButton></MainButton>
      {/* conevetion - 3 to render functional component */}
      {MainButton()}
    </div>
  );
};

const mainRoot = ReactDOM.createRoot(root);
mainRoot.render(<MultiLineFunctionalComponent />);
