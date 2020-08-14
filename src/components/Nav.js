import React, { Component } from "react";
import "./../assets/css/Nav.css";
import { Link } from "react-router-dom";

class Navb extends Component {
  render() {
    var li = document.getElementsByTagName("li");
    document.addEventListener("DOMContentLoaded", function (event) {
      for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
    });

    return (
      <div id="navbarBlock">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="./">
              Home
            </Link>
          </li>
          <div>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">
                Work
              </Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
export default Navb;
