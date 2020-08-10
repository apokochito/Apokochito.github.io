import React, { Component, useState, useEffect } from "react";
import "./../assets/css/Nav.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

class Nav extends Component {
  render() {
    /*
    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };*/
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
          <Button
            type="button"
            variant="outline-light"
            size="sm"
            style={{ width: "auto" }}
            /*onClick={themeToggler}*/
          >
            🌚 / 🌝
          </Button>
        </div>
      </div>
    );
  }
}
export default Nav;
