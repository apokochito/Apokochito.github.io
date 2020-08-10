import React, { Component } from "react";
import "./../assets/css/Work.css";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
class Work extends Component {
  render() {
    return (
      <div id="profile">
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton
            value={1}
            variant="secondary"
            size="sm"
            style={{ fontWeight: "bold" }}
          >
            Certifications
          </ToggleButton>
          <ToggleButton
            value={2}
            variant="secondary"
            size="sm"
            style={{ fontWeight: "bold" }}
          >
            OpenSource
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}
export default Work;
