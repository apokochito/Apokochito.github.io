import React, { Component } from "react";
import "./../assets/css/Nav.css";
import { Link } from "react-router-dom";

class Navb extends Component {
  render() {
    function setInactive() {
      var li = document.getElementsByTagName("li");
      for (var i = 0; i < li.length; i++) {
        if (li[i].className.includes("active")) {
          console.log("Ya tiene active");
        } else {
          li[i].className = li[i].className.replace(" active", "");
        }
      }
    }
    function setActive(num) {
      var li = document.getElementsByTagName("li");
      if (li[num].className.includes("active")) {
        console.log("Ya tiene active");
      } else {
        for (var i = 0; i < li.length; i++) {
          if (li[i].className.includes("active")) {
            li[i].className = li[i].className.replace(" active", "");
          }
        }
        li[num].className += " active";
        sessionStorage.setItem("li", li[num].className);
      }
    }

    window.onload = function () {
      setInactive();
      sessionStorage.getItem("li");
      if (sessionStorage.getItem("li") == null) {
        setActive(0);
      } else {
        var li = document.getElementsByTagName("li");
        var num = sessionStorage.getItem("li");
        if (num.includes("1")) {
          for (var i = 0; i <= li.length; i++) {
            if (i === 0) {
              li[i].className += " active";
            }
          }
        }
        if (num.includes("2")) {
          for (var j = 0; j <= li.length; j++) {
            if (j === 1) {
              li[j].className += " active";
            }
          }
        }
        if (num.includes("3")) {
          for (var k = 0; k <= li.length; k++) {
            if (k === 2) {
              li[k].className += " active";
            }
          }
        }
        if (num.includes("4")) {
          for (var l = 0; i <= li.length; l++) {
            if (l === 3) {
              li[l].className += " active";
            }
          }
        }
      }
    };

    return (
      <div id="navbarBlock">
        <ul className="navbar-nav">
          <li className="nav-item 1">
            <Link className="nav-link" to="./" onClick={() => setActive(0)}>
              Home
            </Link>
          </li>
          <div>
            <li className="nav-item 2">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setActive(1)}
              >
                About
              </Link>
            </li>
            <li className="nav-item 3">
              <Link
                className="nav-link"
                to="/blog"
                onClick={() => setActive(2)}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item 4">
              <Link
                className="nav-link"
                to="/work"
                onClick={() => setActive(3)}
              >
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
