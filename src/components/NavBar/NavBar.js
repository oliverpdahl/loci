import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavBarLink from "./NavBarLink";
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
          <NavBarLink route={"/dashboard"} displayName={"Dashboard"} />
          <NavBarLink route={"/preferences"} displayName={"Preferences"} />
        </Nav>
        {/* TODO - if there is as user they are shown in the nav bar */}
      </Navbar.Collapse>
    </Navbar>
  );
}
