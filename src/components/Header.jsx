import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className="section-center nav pt-3">
        <div>
          <Link to="/" className="text-decoration-none">
            <h4>Readify</h4>
          </Link>
        </div>
        <div>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            {show ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="links gap-5 fs-6 d-none d-lg-flex">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button className="btnn">Lend one</button>
        </div>
      </div>
      {show && (
        <div className="links gap-5 fs-6">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button className="btnn">Lend one</button>
        </div>
      )}
    </section>
  );
};

export default Header;
