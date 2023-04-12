import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-social-media">
        <a href="https://www.facebook.com/fleur.gael?mibextid=ZbWKwL">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
        <a href="https://twitter.com/home">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/suleeh___/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <SocialIcon url="https://github.com/Sirumba" />
        
      </div>
      <p>Copyright © 2023 Simon Sirumba</p>
    </footer>
  );
};

export default Footer;