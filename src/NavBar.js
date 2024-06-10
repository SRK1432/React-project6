import React from "react";
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ onShow, cartItems }) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container className="d-flex justify-content-center" style={{ fontSize: 25, fontFamily: 'Times New Roman' }}>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/">Store</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
        <Button variant="dark" style={{ borderColor: 'cyan', borderWidth: 3, marginRight: 20 }} onClick={onShow}>
          Cart<Badge bg='warning'>{cartItems.length}</Badge>
        </Button>
      </Navbar>
      <Navbar bg="secondary" expand="lg" variant="dark" className="p-5 mt-1">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ fontSize: 70, fontWeight: 'bolder', fontFamily: 'Times New Roman' }}>The Generics</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
