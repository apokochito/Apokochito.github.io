import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import "./../assets/css/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Intro from "./Intro";
import Main from "./Main";
import Blog from "./Blog";
import Work from "./Work";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Note from "./Note";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const IconLinks = ({ href, icon }) => (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
  const contact = (
    <React.Fragment>
      <ul>
        <IconLinks href="mailto:diana.apolinar@hotmail.com" icon={faEnvelope} />
        <IconLinks
          href="https://www.linkedin.com/in/dianaepinto/"
          icon={faLinkedin}
        />
        <IconLinks href="https://twitter.com/apokochito" icon={faTwitter} />
        <IconLinks href="https://github.com/apokochito" icon={faGithub} />
      </ul>
    </React.Fragment>
  );
  const notes = [
    { title: "Contact", content: contact },
    {
      title: "Companies",
      content: "I've worked at 4thSource an Agile thought company.",
    },
    {
      title: "Communities",
      content: "I'm a volunteer at Women Who Code Colima - Codificadas.",
    },
    {
      title: "Education",
      content:
        "I'm a telematics engineer and I'm a master's student in Computer Security.",
    },
    {
      title: "Technologies I have worked with",
      content: "Java with Spring mostly.",
    },
  ];
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="wrapper">
          <Router>
            <div className="box-menu">
              <div>
                <Link style={{ padding: "0px 10px 0px 10px" }} to="./">
                  About
                </Link>
              </div>
              <Nav />
              <div id="background-mode">
                <Button
                  type="button"
                  variant="outline-light"
                  size="sm"
                  style={{ width: "auto" }}
                  onClick={themeToggler}
                >
                  🌚 / 🌝
                </Button>
              </div>
            </div>
            <div className="box-presentation">
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/about">
                <Intro />
                <div className="notes">
                  {notes.map((note, i) => (
                    <Note title={note.title} key={i} content={note.content} />
                  ))}
                </div>
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
            </div>
            <div className="box-footer">
              <Footer />
            </div>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
