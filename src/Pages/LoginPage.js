import React, { useState } from "react";
import { Button, Container, Form, Navbar} from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
const LoginPage=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
        navigate("/");
    }
    return(
    // <form onSubmit={submitHandler} className="text-center">
    // <h2>Login</h2>
    // <div>
    // <label htmlFor="email">Email id:</label>
    // </div>
    // <input type="email" id="email-id" required onChange={(e)=>setEmail(e.target.value)}/>
    // <div>
    // <label htmlFor="password">Password:</label>
    // </div>
    // <input type="password" id="password" required onChange={(e)=>setPassword(e.target.value)}/>
    // <div><Button type="submit">Login</Button></div>
    // </form>
    <>
    <Navbar bg="secondary" expand="lg" variant="dark" className="p-5 mt-1">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand style={{ fontSize: 70, fontWeight: 'bolder', fontFamily: 'Times New Roman' }}>
            User Login
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Container className="d-flex justify-content-center align-items-center min-vh-80">
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Email id:</Form.Label>
                <Form.Control 
                type="email" 
                id="email" required
                style={{ width: 300, background: 'lightBlue' }}
                onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                type="password"
                id="password" required 
                style={{ width: 300, background: 'lightBlue' }}
                onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="secondary" type="submit">Login</Button>
        </Form>
    </Container>
    </>
    )
}
export default LoginPage;