import React from "react";

const Header = () => {
  return (
    <div className="section-center nav pt-3">
      <div>
        <h4>Readify</h4>
      </div>
      <div className="links gap-5 fs-6">
        <a href="#">About</a>
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
