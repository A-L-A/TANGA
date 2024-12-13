import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primaryTurquoise text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          TANGA
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-secondaryGreen">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-secondaryGreen">
            Dashboard
          </Link>
          <a href="#about" className="hover:text-secondaryGreen">
            About
          </a>
          <a href="#contact" className="hover:text-secondaryGreen">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
