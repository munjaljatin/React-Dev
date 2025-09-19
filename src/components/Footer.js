import { NEW_LOGO_LINK } from "../utils/constant";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="foo-logo">
        <img src={NEW_LOGO_LINK} alt="" width={50} />
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
                className="links"
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"
                alt=""
                className="links"
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"
                alt=""
                className="links"
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"
                alt=""
                className="links"
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"
                alt=""
                className="links"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// Footer Component -- Ended

// exporting the footer component to the outside world
export default Footer;
