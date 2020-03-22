import React from "react";
import "./../assets/css/App.css";
import Nav from "./Nav";
import Note from "./Note";
import Footer from "./Footer";
import Intro from "./Intro";
import Main from "./Main";
function App() {
  const notes = [
    { title: "Contact", content: "content" },
    { title: "Technologies I have worked with", content: "content2" },
    { title: "Companies", content: "content3" },
    { title: "Communities", content: "content4" },
    { title: "Education", content: "content5" }
  ];
  return (
    <div className="App">
      <Nav />
      <Main />
      <Intro />
      {notes.map((note, i) => (
        <Note title={note.title} key={i} content={note.content} />
      ))}
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
