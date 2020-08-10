import React, { Component } from "react";
import "./../assets/css/Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div id="navbar">
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
      </div>
    );
  }
}
export default Nav;
