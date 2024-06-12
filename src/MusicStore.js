import React from 'react';
import { Container, Row, Col, Button, Image, Navbar } from 'react-bootstrap';

const MusicStore = ({ addToCart, onShow }) => {
  const items = [
    { id: 1, title: 'Album 1', price: 12.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
    { id: 2, title: 'Album 2', price: 14.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
    { id: 3, title: 'Album 3', price: 9.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
    { id: 4, title: 'Album 4', price: 19.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },
    { id: 5, title: 'T-Shirt', price: 19.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png' },
    { id: 6, title: 'Coffee Cup', price: 6.99, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png' }
  ];

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col className="text-center">
            <h1>MUSIC</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          {items.slice(0, 4).map(item => (
            <Col key={item.id} md={6} className="text-center">
              <h2>{item.title}</h2>
              <Image src={item.imageUrl} fluid={true} />
              <p className="mt-3">${item.price}</p>
              <Button
                variant="info" className="mt-1"
                onClick={() => addToCart(item)}>
                Add to Cart</Button>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <h1>MERCHANDISE</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          {items.slice(4).map(item => (
            <Col key={item.id} md={6} className="text-center">
              <h2>{item.title}</h2>
              <Image src={item.imageUrl} fluid={true} />
              <p className="mt-3">${item.price}</p>
              <Button
                variant="info" className="mt-1"
                onClick={() => addToCart(item)}>
                Add to Cart</Button>
            </Col>
          ))}
        </Row>
      </Container>
      <Button variant='secondary' style={{ marginLeft: 600, color: 'aqua' }} onClick={onShow}>See Cart</Button>
    </>
  );
};

export default MusicStore;
