import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="section-center nav pt-3">
      <div>
        <Link to="/" className="text-decoration-none">
          <h4>Readify</h4>
        </Link>
      </div>
      <div className="links gap-5 fs-6">
        <Link to="/about">About</Link>
        <a href="##">Services</a>
        <a href="###">Contact</a>
        <button className="btnn">Lend one</button>
      </div>
      {/* <div className="links">
        <button className="btnn">Get one</button>
      </div> */}
    </div>
  );
};

export default Header;
