import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Clouds.com</h3>
          <p>
            Your go-to destination for all things cloud-related. Explore our
            wide range of products and services.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@clouds.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <Link>
            <i className="fa-brands fa-instagram SocialIcons"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-square-facebook SocialIcons"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-twitter SocialIcons"></i>
          </Link>
          <Link>
            <i className="fa-brands fa-square-x-twitter SocialIcons"></i>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Clouds.com. All rights reserved.</p>
        <p>Made with ❤️ by Clouds.com</p>
      </div>
    </footer>
  );
};

export default Footer;
