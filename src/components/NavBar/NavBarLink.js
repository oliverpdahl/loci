import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

export default function NavBarLink({ route, displayName }) {
  return (
    <LinkContainer to={route}>
      <Nav.Link>{displayName}</Nav.Link>
    </LinkContainer>
  );
}
