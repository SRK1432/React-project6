import React from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';

function MusicStore() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col className="text-center">
            <h1>MUSIC</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="text-center">
            <h2>Album 1</h2>
            <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" fluid={true}/>
            <p className="mt-3">$12.99</p>
            <Button variant="info" className="mt-1">Add to Cart</Button>
          </Col>
          <Col md={6} className="text-center">
            <h2>Album 2</h2>
            <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" fluid={true} />
            <p className="mt-3">$14.99</p>
            <Button variant="info" className="mt-1">Add to Cart</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="text-center">
            <h2>Album 3</h2>
            <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" fluid={true} />
            <p className="mt-3">$9.99</p>
            <Button variant="info" className="mt-1">Add to Cart</Button>
          </Col>
          <Col md={6} className="text-center">
            <h2>Album 4</h2>
            <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" fluid={true} />
            <p className="mt-3">$19.99</p>
            <Button variant="info" className="mt-1"> Add to Cart</Button>
          </Col>
        </Row>
        <h1 className='text-center'>MERCH</h1>
        <Row className='mt-5'>
          <Col md={6} className='text-center'>
            <h2>T-Shirt</h2>
            <Image src='https://prasadyash2411.github.io/ecom-website/img/Shirt.png' fluid={true} />
            <p className='mt-3'>$19.99</p>
            <Button variant='info' className='mt-1'>Add to Cart</Button>
          </Col>
          <Col md={6} className='text-center'>
            <h2>Coffee Cup</h2>
            <Image src='https://prasadyash2411.github.io/ecom-website/img/Cofee.png' className="img-fluid"  />
            <p className='mt-3'>$6.99</p>
            <Button variant='info' className='mt-1'>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      <Button variant='secondary' className='mt-5 mb-4' style={{marginLeft:550, color:'cyan'}}>See the Cart</Button>

    </>
  );
}
export default MusicStore;
