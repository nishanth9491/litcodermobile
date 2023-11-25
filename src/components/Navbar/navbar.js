import React from "react";
import { Link } from "react-scroll";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div></div>

      <div className="navcenter">
        <Link
          activeClass="active"
          to="today"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navitems"
        >
          LITCODE MOBILE
        </Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
