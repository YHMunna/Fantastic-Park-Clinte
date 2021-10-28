import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="navBrand">Fantastic Park</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                className="nav-link"
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White",
                }}
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="nav-link"
                to="/services"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White",
                }}
              >
                Our Services
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="nav-link"
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White",
                }}
              >
                About
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
