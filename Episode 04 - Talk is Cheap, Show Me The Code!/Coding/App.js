import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// import "./Images/intro.mp4";

/**
 * Header
 *    logo
 *    Nav-links
 *
 * Body
 *    Restaurant Container
 *    Restaurant Card
 * Footer
 *
 *    links
 *    Address
 *    Copyright
 */

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
          alt="food"
          style={{ width: "90px" }}
        />
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

// Body Component
const videoSource = "";
const Body = () => {
  return (
    <div className="main-body-container">
      <div className="body-container">
        <img
          src="https://images.unsplash.com/photo-1543992321-cefacfc2322e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww"
          alt=""
        />
        <div className="centered">
          <h1 className="bd-h1">Order Delivery Near You!</h1>
          <input
            type="text"
            className="delivery"
            placeholder="Enter delivery address"
          />
        </div>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

// card
const Card = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://lh3.googleusercontent.com/-hYLLrTFKk2Xe8Gd5oG6YZjUBE-rZpSX6NeGAc4Okiq-xil1UeU54gwj7lFxIgV7I_Hl7FtuDH1T6MibDEjzKIDurey_GdSsRR3NJ9o=w1200-rw"
          width="100%"
          alt=""
        />
      </div>
      <div className="text-container">
        <h3>
          North Indian . Chinese <span>1000 for two</span>
        </h3>
        <p>Name</p>
        <div className="pre-book">
          <div className="percent">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
              alt=""
            />
            <div>Flat 20% off on pre-booking</div>
          </div>
          <div className="offers">+3 more</div>
        </div>
        <div className="offer">Up to 10% off with bank offers</div>
      </div>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div
      className="image-section"
      style={{ height: "100%", width: "100%", margin: "100px 0" }}
    >
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        style={{ height: "100%", width: "100%" }}
        alt="image-section"
      />
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="foo-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
          alt=""
        />
        <p>Copyright</p>
      </div>
      <div>
        <h4 className="heading4">Company</h4>
        <ul className="foo-links">
          <li>About Us</li>
          <li>Swiggy Corporate</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="heading4">Contact Us</h4>
        <ul className="foo-links">
          <li>Help & Support</li>
          <li>Partner With Us</li>
          <li>Ride With Us</li>
        </ul>
      </div>
      <div>
        <h4 className="heading4">Available In</h4>
        <ul className="foo-links">
          <li>Bengaluru</li>
          <li>Hyderabad</li>
          <li>Mumbai</li>
          <li>Delhi</li>
        </ul>
      </div>
      <div>
        <div className="life-at-swiggy">
          <h4 className="heading4">Life at Swiggy</h4>
          <ul className="foo-links">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
        <div className="social-links">
          <h4>Social Links</h4>
          <div className="media-links">
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
      <ImageSection />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
