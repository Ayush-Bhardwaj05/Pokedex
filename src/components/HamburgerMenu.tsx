import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-icon">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="menu">
          <Link to="/search">Search</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/pokemon">Pokemon</Link>
          <Link to="/list">My List</Link>
          <Link to="/about">About</Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
