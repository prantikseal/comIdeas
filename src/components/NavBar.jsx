import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <h1>
          <a href="/" rel="noopener noreferrer">
            ComIdeas<span>.</span>
          </a>
        </h1>

        <ul className="navigation">
          <li className="navLink">
            <a href="/">Home</a>
          </li>
          <li className="navLink">
            <a href="#helpSection_container">Guide</a>
          </li>
          <li className="navLink">
            <a href="http://fueler.io/prantikseal" target="_blank" rel="noopener noreferrer">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
