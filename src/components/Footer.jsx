import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h5>
        &copy;{new Date().getFullYear()} <span>Readify</span>{" "}
      </h5>
      <h5>All rights reserved</h5>
    </div>
  );
};

export default Footer;
