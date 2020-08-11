import React, { Component } from "react";
import "./../assets/css/Work.css";
import Nav from "react-bootstrap/Nav";
class Work extends Component {
  render() {
    return (
      <div id="topics">
        <Nav justify variant="tabs" defaultActiveKey="Projects">
          <Nav.Item>
            <Nav.Link eventKey="OpenSource">OpenSource</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Certifications">Certifications</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Projects">Projects</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
export default Work;
