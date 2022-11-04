import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="navbar container">
      <Link to="/" className="lg">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <ul className={`list ${navOpen ? "navBar" : ""}`}>
        <li onClick={() => setNavOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setNavOpen(false)}>
          <Link to="/movies">Movies</Link>
        </li>
        <li onClick={() => setNavOpen(false)}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setNavOpen(false)}>
          <Link to="/support">Support</Link>
        </li>
      </ul>
      <button className={`opennav`} onClick={openNav}>
        {navOpen ? <VscChromeClose /> : <FiMenu />}
      </button>
    </div>
  );
};

export default Navbar;
