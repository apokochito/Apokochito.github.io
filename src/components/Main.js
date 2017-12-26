import React, { Component } from "react";
import "./../assets/css/Main.css";
class Main extends Component {
  render() {
    return (
      <div id="welcome">
        <p>Hello there!</p>
        <p>
          I'm Diana Pinto, a <span>telematics engineer</span> and{" "}
          <span>software developer</span>.
        </p>
      </div>
    );
  }
}
export default Main;
