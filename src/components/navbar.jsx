import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";

const MyNavbar = () => {
  const navbarStyle = {
    backgroundColor: "#000000", // Replace with your desired color code
    height: "8vh",
    width: "100%",
  };

  const toggle = {
    fontSize: "1rem",
    marginRight: "1vh",
    backgroundColor: "#000000",
    padding: "0.2rem 0.4rem",
  };

  const icons = {
    height: "auto",
    display: "flex",
    alignItems: "center",
    marginRight: "1vh",
    backgroundColor: "#000000",
    padding: "0.2rem 0.4rem",
  };

  return (
    <Navbar style={navbarStyle} fixed="top" variant="dark" expand="lg">
      <Navbar.Brand style={{ fontSize: "1.5rem", marginLeft: "3vh" }} href="#">
        DHEERAJ NANDIRAJU
      </Navbar.Brand>
      <Navbar.Toggle style={toggle} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-10">
          <Nav.Link href="/" style={toggle} className="text text-xl ml-3">
            Home
          </Nav.Link>
          <Nav.Link href="/about" style={toggle} className="text text-xl ml-3">
            About
          </Nav.Link>
          {/* <Nav.Link href="#" style={toggle} className="text text-xl ml-3">
            Projects
          </Nav.Link> */}
          <Nav.Link href="/skill" style={toggle} className="text text-xl ml-3">
            Skills
          </Nav.Link>
          <Nav.Link
            href="/contact"
            style={toggle}
            className="text text-xl ml-3"
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/dheerajnandiraju/"
            style={icons}
            className="text text-xl ml-3"
          >
            <FaInstagram />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/dheeraj-nandiraju/"
            style={icons}
            className="text text-xl ml-3"
          >
            <FaLinkedin />
          </Nav.Link>
          <Nav.Link
            href="mailto:dheerajnandiraju@gmail.com"
            style={icons}
            className="text text-xl ml-3"
          >
            <IoMailOpenSharp />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
