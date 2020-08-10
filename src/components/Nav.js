import React, { Component } from "react";
import "./../assets/css/Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const dark = () => {
      var element = document.body;
      return element.classList.toggle("dark-mode");
    };
    return (
      <div id="navbar">
        <div>
          <a href="./">Home</a>
        </div>
        <div>
          <nav>
            <Link style={{ padding: "0px 10px 0px 10px" }} to="/about">
              About
            </Link>
            <Link style={{ padding: "0px 10px 0px 10px" }} to="/blog">
              Blog
            </Link>
            <Link style={{ padding: "0px 10px 0px 10px" }} to="/work">
              Work
            </Link>
          </nav>
        </div>
        <div id="background-mode">
          {/*<button>Toggle dark mode {dark()}</button>*/}
        </div>
      </div>
    );
  }
}
export default Nav;
