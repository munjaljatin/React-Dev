import { LOGO_LINK } from "../utils/constant";

// Header Component -- Started
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_LINK} alt="food" style={{ width: "90px" }} />
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
          <button className="sign-in">Sign in</button>
        </ul>
      </div>
    </div>
  );
};
// Header Component -- Ended

// Exporting the Header Component to outside world!
export default Header;
