import { LOGO_LINK } from "../utils/constant";
import { NEW_LOGO_LINK } from "../utils/constant";
import { useState } from "react";

// Header Component -- Started
const Header = () => {
  // creating a local state variable for rendering sign-in and sign-out
  const [btnName, setBtnName] = useState("Sign In");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={NEW_LOGO_LINK} alt="food" style={{ width: "50px" }} />
      </div>
      <div className="nav-items">
        <ul className="links">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Food</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <button className="get-the-app">Get the App</button>
          <button
            className="sign-in"
            onClick={() => {
              if (btnName === "Sign In") {
                setBtnName("Sign Out");
              } else if (btnName === "Sign Out") {
                setBtnName("Sign In");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
// Header Component -- Ended

// Exporting the Header Component to outside world!
export default Header;
