import React, { Component } from "react";
import "./../assets/css/Nav.css";
class Nav extends Component {
  render() {
    return (
      <div id="navbar">
        <div>
          <a href="./">Diana Pinto</a>
        </div>
        <div>
          <nav>
            <a href="./">About me</a>
            <a href="/">Treasures</a>
            <a href="/">Projects</a>
          </nav>
        </div>
        <div id="background-mode">Dark</div>
      </div>
    );
  }
}
export default Nav;
