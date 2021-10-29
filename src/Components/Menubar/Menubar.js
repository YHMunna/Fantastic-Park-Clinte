import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Menubar = () => {
  const { user, logOut } = useAuth();
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
                to="/waterRide"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White",
                }}
              >
                Water Ride
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="nav-link"
                to="/resort"
                activeStyle={{
                  fontWeight: "bold",
                  color: "White",
                }}
              >
                Resort
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
            <p className="text-white pt-3 pe-2">{user?.displayName}</p>
            {user.email ? (
              <button className="btn btn-primary" onClick={logOut}>
                {" "}
                Sign Out
              </button>
            ) : (
              <Nav.Link>
                <NavLink
                  className="nav-link"
                  to="/login"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Login
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
