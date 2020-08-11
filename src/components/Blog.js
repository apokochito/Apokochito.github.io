import React, { Component } from "react";
import "./../assets/css/Blog.css";
import Nav from "react-bootstrap/Nav";
class Blog extends Component {
  render() {
    return (
      <div id="topics">
        <Nav justify variant="tabs" defaultActiveKey="Slides">
          <Nav.Item>
            <Nav.Link eventKey="Posts">Posts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="SideProjects">SideProjects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Slides">Slides</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
export default Blog;
