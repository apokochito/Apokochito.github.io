import React, { Component } from "react";
import "./../assets/css/Intro.css";
class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <article>
          <span>About me</span>
        </article>
        <div id="profile">
          <div id="cv">
            <img
              src={require("./../assets/images/profile.png")}
              alt="profile"
            />
            <button>CV</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet
            ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut
            potenti pellentesque quisque. In eget sapien sed, sit duis
            vestibulum ultricies, placerat morbi amet vel, nullam in in lorem
            vel. In molestie elit dui dictum, praesent nascetur pulvinar sed, in
            dolor pede in aliquam, risus nec err
          </p>
        </div>
      </React.Fragment>
    );
  }
}
export default Intro;
