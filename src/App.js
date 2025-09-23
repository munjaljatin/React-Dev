import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer";
import Box from "./components/Box";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import "../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/styles.css";
import Menu from "./pages/Menu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

// Routing Configuration and creating the children routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: [<Body key={1} />, <ImageSection key={2} />, <Box key={3} />],
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resID",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
