import React from 'react';
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap';

const Cart = ({ cartItems, onHide,onAlert, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container className="cart-container mt-5">
      <Row>
        <Col>
          <h2 style={{textAlign:'center'}}>Cart</h2>
        </Col>
        <Col className="text-end">
          <CloseButton onClick={onHide}></CloseButton>
        </Col>
      </Row>
      {cartItems.length === 0 ? (
        <Row>
          <Col className="text-center">
            <p>Your cart is empty.</p>
          </Col>
        </Row>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Row key={index} className="cart-item my-3" md={3}>
              <Col md={1}>
                <Image src={item.imageUrl} thumbnail />
              </Col>
              <Col md={4}>
                <h4>{item.title}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: 1</p>
              </Col>
              <Col md={4} className="d-flex align-items-center">
                <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
              </Col>
            </Row>
          ))}
          <Row className="mt-3">
            <Col className="text-end">
              <h4>Total: ${totalAmount.toFixed(2)}</h4>
            </Col>
          </Row>
        </>
      )}
       <Button  variant='info' className='text-center' onClick={onAlert}>Purchase</Button>
    </Container>
  );
};

export default Cart;
