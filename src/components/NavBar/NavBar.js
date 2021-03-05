import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../logo.png";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/dashboard">
        <img
          src={logo}
          height="35"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {/* TODO - links to component */}
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/preferences">
            <Nav.Link>Preferences</Nav.Link>
          </LinkContainer>
        </Nav>
        {/* TODO - if there is as user they are shown in the nav bar */}
      </Navbar.Collapse>
    </Navbar>
  );
}
