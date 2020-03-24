import React, { Component } from "react";
import "./../assets/css/Note.css";
class Note extends Component {
  render() {
    const note = this.props;
    return (
      <React.Fragment>
        <article id="notesArticle">
          <span>{note.title}</span>
          <p>{note.content}</p>
        </article>
      </React.Fragment>
    );
  }
}
export default Note;
