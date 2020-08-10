import React, { Component } from "react";
import "./../assets/css/NormalNote.css";
class LinkNote extends Component {
  render() {
    const note = this.props;
    return (
      <React.Fragment>
        <article id="notesArticle">
          <span>{note.title}</span>
          <div>{note.content}</div>
        </article>
      </React.Fragment>
    );
  }
}
export default LinkNote;
