import React, { useState } from "react";
import { Form, Navbar, Container, Button } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://react-http-a0270-default-rtdb.firebaseio.com/userData.json", {
      method: "POST",
      body: JSON.stringify({ name, email, phone }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(name,email,phone);
  };

  return (
    <>
      <Navbar bg="secondary" expand="lg" variant="dark" className="p-5 mt-1">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ fontSize: 70, fontWeight: 'bolder', fontFamily: 'Times New Roman' }}>
            The Generics
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center min-vh-80">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control 
              type="text" 
              style={{ width: 300, background: 'lightBlue' }}
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control 
              type="text" 
              style={{ width: 300, background: 'lightBlue' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone No.:</Form.Label>
            <Form.Control 
              type="number" 
              style={{ width: 300, background: 'lightBlue' }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
            />
          </Form.Group>
          <Button variant="secondary" type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default ContactUs;
