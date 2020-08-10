import React, { Component, useState } from "react";
import "./../assets/css/Blog.css";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
class Blog extends Component {
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
            Posts
          </ToggleButton>
          <ToggleButton
            value={2}
            variant="secondary"
            size="sm"
            style={{ fontWeight: "bold" }}
          >
            Slides
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
}
export default Blog;
