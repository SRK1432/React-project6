import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Cart = ({ cartItems }) => {
    return (
        <Container className="cart-container mt-5">
            <Row>
                <Col>
                    <h2>Your Cart</h2>
                </Col>
            </Row>
            {cartItems.map((item, index) => (
                <Row key={index} className="cart-item my-3">
                    <Col md={4}>
                        <Image src={item.imageUrl} fluid />
                    </Col>
                    <Col md={4}>
                        <h4>{item.title}</h4>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </Col>
                    <Col md={4}>
                        <Button variant="danger">Remove</Button>
                    </Col>
                </Row>
            ))}
            <Row className="mt-3">
                <Col className="text-end">
                    <Button variant="secondary">Close</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
