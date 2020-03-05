import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {MDBIcon} from "mdbreact";
import InputGroup from 'react-bootstrap/InputGroup';

function MachinesDiv() {
  return (
    <Container>
  <Row>
    <Col><MDBIcon icon="tshirt" size="5x" /><InputGroup.Checkbox aria-label="Checkbox for following text input" /></Col>
    <Col><MDBIcon icon="tshirt" size="5x" className="deep-purple-text"/><InputGroup.Checkbox aria-label="Checkbox for following text input" /></Col>
    <Col><MDBIcon icon="tshirt" size="5x" className="deep-purple-text"/><InputGroup.Checkbox aria-label="Checkbox for following text input" /></Col>
    <Col><MDBIcon icon="tshirt" size="5x" className="deep-purple-text"/><InputGroup.Checkbox aria-label="Checkbox for following text input" /></Col>
  </Row>
  <Row>
    <Col><MDBIcon icon="tshirt" size="5x" /><InputGroup.Checkbox aria-label="Checkbox for following text input" /></Col>
    <Col><MDBIcon icon="tshirt" size="5x" className="deep-purple-text"/><InputGroup.Checkbox aria-label="Checkbox for following text input" /></Col>
  </Row>
  <Row>
    <Col><Button variant="primary">Reserve</Button></Col>
  </Row>
</Container>
  );
}

export default MachinesDiv;
