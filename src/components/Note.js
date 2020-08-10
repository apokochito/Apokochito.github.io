import React, { Component } from "react";
import "./../assets/css/Note.css";
class Note extends Component {
  render() {
    const note = this.props;
    return (
      <React.Fragment>
        <article id="note">
          <span>{note.title}</span>
          <div>{note.content}</div>
        </article>
      </React.Fragment>
    );
  }
}
export default Note;
