import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home/">Home</Nav.Link>
              <Nav.Link href="/accounts/login">Login</Nav.Link>
              <Nav.Link href="/accounts/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
