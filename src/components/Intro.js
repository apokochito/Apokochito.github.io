import React, { Component } from "react";
import "./../assets/css/Intro.css";
class Intro extends Component {
  btnClick() {
    window.open(
      "https://www.dropbox.com/s/71fv9pghc921yyi/Diana%20Pinto%20CV.docx?dl=0"
    );
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="profile">
          <img
            src={require("./../assets/images/profile2.jpeg")}
            alt="Profile"
          />
          <button id="cv" onClick={this.btnClick.bind(this)} type="button">
            CV
          </button>
        </div>
      </div>
    );
  }
}
export default Intro;
