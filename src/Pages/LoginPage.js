import React, { useContext, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context-api/Auth-context";

const LoginPage = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        fetch("https://ecommerce-website-2cc6d-default-rtdb.firebaseio.com/data.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication Failed';
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            authCtx.login(data.idToken);
            navigate("/");
        }).catch((err) => {
            alert(err.message);
        });
    };

    return (
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
                            id="email"
                            required
                            style={{ width: 300, background: 'lightBlue' }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            required
                            style={{ width: 300, background: 'lightBlue' }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="secondary" type="submit">Login</Button>
                </Form>
            </Container>
        </>
    );
};

export default LoginPage;
