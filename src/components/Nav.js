import React, { Component, useState } from "react";
import "./../assets/css/Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    console.log(event.target);
  }
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
