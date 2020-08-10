import React from "react";
import "./../assets/css/App.css";
import Nav from "./Nav";
import Note from "./NormalNote";
import Footer from "./Footer";
import Intro from "./Intro";
import Main from "./Main";
import Blog from "./Blog";
import Work from "./Work";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import NormalNote from "./NormalNote";

function App() {
  const IconLinks = ({ href, icon }) => (
    <li>
      <a href={href} target="_blank">
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
  const contact = (
    <React.Fragment>
      <ul>
        <IconLinks href="https://twitter.com/apokochito" icon={faTwitter} />
        <IconLinks
          href="https://www.linkedin.com/in/dianaepinto/"
          icon={faLinkedin}
        />
        <IconLinks href="https://github.com/apokochito" icon={faGithub} />
        <IconLinks href="mailto:diana.apolinar@hotmail.com" icon={faEnvelope} />
      </ul>
    </React.Fragment>
  );

  const btnClick = (href) => (
    <p>
      <a href={href}></a>
    </p>
  );
  const links = [
    { link: "https://agilethought.com/" },
    { link: "" },
    { link: "" },
  ];
  const notes = [
    { title: "Contact", content: contact },
    { title: "Companies", content: "I've worked at" },
    { title: "Communities", content: "content4" },
    { title: "Education", content: "content5" },
    { title: "Technologies I have worked with", content: "content2" },
  ];
  return (
    <div className="wrapper">
      <Router>
        <div className="box-menu">
          <Nav />
        </div>
        <div className="box-presentation">
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <Intro />
            {notes.map((note, i) => (
              <NormalNote title={note.title} key={i} content={note.content} />
            ))}
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
  );
}

export default App;
