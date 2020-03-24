import React from "react";
import "./../assets/css/App.css";
import Nav from "./Nav";
import Note from "./Note";
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
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const IconLinks = ({ href, icon }) => (
    <li>
      <a href={href}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
  const contact = (
    <React.Fragment>
      <ul>
        <IconLinks href="https://twitter.com/JuanCrg90" icon={faTwitter} />
        <IconLinks
          href="https://www.linkedin.com/in/dianaepinto/"
          icon={faLinkedin}
        />
        <IconLinks href="https://github.com/apokochito" icon={faGithub} />
        <IconLinks href="mailto:diana.apolinar@hotmail.com" icon={faEnvelope} />
      </ul>
    </React.Fragment>
  );
  const notes = [
    { title: "Contact", content: contact },
    { title: "Companies", content: "content3" },
    { title: "Communities", content: "content4" },
    { title: "Education", content: "content5" },
    { title: "Technologies I have worked with", content: "content2" }
  ];
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <Intro />
          {notes.map((note, i) => (
            <Note title={note.title} key={i} content={note.content} />
          ))}
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <hr></hr>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
