import React from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <h2 className="text-center" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>ABOUT</h2>
      <Container className="d-flex justify-content-center mt-4">
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <Table className="text-center" style={{ width: '90%', tableLayout: 'fixed' }}>
              <thead>
                <tr>
                  <th>JUL 16</th>
                  <th>DETROIT, MI</th>
                  <th>DTE ENERGY MUSIC THEATRE</th>
                  <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                  <th>JUL 19</th>
                  <th>TORONTO, ON</th>
                  <th>BUDWEISER STAGE</th>
                  <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                  <th>JUL 22</th>
                  <th>BRISTOW, VA</th>
                  <th>JIGGY LUBE LIVE</th>
                  <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                  <th>JUL 29</th>
                  <th>PHOENIX, AZ</th>
                  <th>AK-CHIN PAVILION</th>
                  <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                  <th>AUG 2</th>
                  <th>LAS VEGAS, NV</th>
                  <th>T-MOBILE ARENA</th>
                  <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
                <tr>
                  <th>AUG 7</th>
                  <th>CONCORD, CA</th>
                  <th>CONCORD PAVILION</th>
                  <th><Button variant="primary">BUY TICKETS</Button></th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
