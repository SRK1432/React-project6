import React from 'react';
import { Modal, Button, ListGroup, Image, Container } from 'react-bootstrap';

const Cart = ({ onHide, cartItems, removeFromCart, onAlert }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <Image src={item.imageUrl} style={{ width: '50px', marginRight: '10px' }} />
                <div>{item.title}</div>
                <div>${item.price}</div>
                <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <Container className="text-center mt-4">
          <h3>Total: ${total.toFixed(2)}</h3>
          <Button variant="success" onClick={onAlert}>Proceed to Checkout</Button>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
