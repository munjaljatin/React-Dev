import { Link } from "react-router";
import { LOGO_LINK } from "../utils/constant";
import { NEW_LOGO_LINK } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

// Header Component -- Started
const Header = () => {
  // creating a local state variable for rendering sign-in and sign-out
  // state variable
  const [btnName, setBtnName] = useState("Sign In");
  const handleClick = () => {
    btnName === "Sign In" ? setBtnName("Sign Out") : setBtnName("Sign In");
  };
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={NEW_LOGO_LINK} alt="food" style={{ width: "50px" }} />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button className="get-the-app">Get the App</button>
          <Link to="sign-up">
            <button className="sign-in" onClick={handleClick}>
              {btnName}
            </button>
          </Link>
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};
// Header Component -- Ended

// Exporting the Header Component to outside world!
export default Header;
