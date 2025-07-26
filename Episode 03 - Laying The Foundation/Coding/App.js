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
const root = document.getElementById("root");
console.log(root);

const mainRoot = ReactDOM.createRoot(root);
mainRoot.render(<SecondComponent />);
