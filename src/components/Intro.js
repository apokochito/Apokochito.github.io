import React, { Component } from "react";
import "./../assets/css/Intro.css";
import Button from "react-bootstrap/Button";
class Intro extends Component {
  btnClick() {
    window.open(
      "https://www.dropbox.com/s/2wkudf8iyra6ckz/Diana%20Pinto%20CV.pdf?dl=0"
    );
  }
  render() {
    return (
      <div id="profile">
        <article id="firstArticle">
          <span>About me</span>
        </article>
        <img src={require("./../assets/images/profile2.jpeg")} alt="profile" />
        <Button
          variant="outline-link"
          size="lg"
          onClick={this.btnClick.bind(this)}
          type="button"
        >
          CV
        </Button>
      </div>
    );
  }
}
export default Intro;
