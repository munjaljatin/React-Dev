import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img
          src="https://foodfire-chapter03.netlify.app/logo.a00286fd.png"
          alt="logo"
          className="main-logo"
        />
      </div>
      <div className="center">
        <input
          type="text"
          name=""
          id="search"
          placeholder="Search Anything You Want..."
        />
      </div>
      <div className="right">
        <img
          src="https://foodfire-chapter03.netlify.app/user%20icon.873aadc2.png"
          alt="user"
          className="user"
        />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
