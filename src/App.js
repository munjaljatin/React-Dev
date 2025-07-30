import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSection from "./components/ImageSection";
import Body from "./components/Body";
import "../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/styles.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <ImageSection />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
