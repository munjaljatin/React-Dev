import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import Example from "./components/Example";
import Section from "./components/Section";
import Box from "./components/Box";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About";
import Error from "./pages/Error";
import "../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/styles.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <ImageSection />
      <Section />
      <Box />
      <Footer />
    </React.Fragment>
  );
};

// Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
