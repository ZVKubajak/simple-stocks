import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../assets/css/css-layout/Navigation.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <Navbar bg="dark" data-bs-theme="dark" id="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Simple Stocks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" active={currentPage === "/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/stocks" active={currentPage === "/stocks"}>
            Explore
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" active={currentPage === "/contact"}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
