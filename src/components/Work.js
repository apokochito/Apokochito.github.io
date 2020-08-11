import React, { Component } from "react";
import "./../assets/css/Work.css";
import Nav from "react-bootstrap/Nav";
class Work extends Component {
  render() {
    return (
      <div id="topics">
        <Nav justify variant="tabs" defaultActiveKey="Certifications">
          <Nav.Item>
            <Nav.Link id="hey" eventKey="OpenSource">
              OpenSource
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="hey" eventKey="Certifications">
              Certifications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="hey" eventKey="Projects">
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
export default Work;
