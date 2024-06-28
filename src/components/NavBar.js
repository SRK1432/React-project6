import React, { useContext } from "react";
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from "../context-api/Auth-context";

const NavBar = ({ onShow, cartItems }) => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="d-flex justify-content-center" style={{ fontSize: 25, fontFamily: 'Times New Roman' }}>
        <Nav>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/">Store</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          {authCtx.isLoggedIn ? (
            <Nav.Link as={Link} to="/" onClick={logoutHandler}>Logout</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
      <Button variant="dark" style={{ borderColor: 'cyan', borderWidth: 3, marginRight: 20 }} onClick={onShow}>
        Cart <Badge bg='warning'>{cartItems.length}</Badge>
      </Button>
    </Navbar>
  );
};

export default NavBar;
