import React, { Component } from "react";
import "./../assets/css/Nav.css";
class Nav extends Component {
  render() {
    return (
      <div id="navbar">
        <div>
          <a href="./">Home</a>
        </div>
        <div>
          <nav>
            <a href="./">About</a>
            <a href="/">Blog</a>
            <a href="/">Work</a>
          </nav>
        </div>
        <div id="background-mode">Dark</div>
      </div>
    );
  }
}
export default Nav;
