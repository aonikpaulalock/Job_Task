import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../assets/image/logo-demo 1.png"
import "../assets/styles/home/header.css"
const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="nav-bg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="img-fluid">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white text-bg-dark" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavHashLink className="nav-anchor" smooth="true" to="/#home">Home</NavHashLink>
              <NavHashLink  className="nav-anchor" smooth="true" to="/#result">Result</NavHashLink>
              <NavHashLink className="nav-anchor" smooth="true" to="/#revolution">Revolution</NavHashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;