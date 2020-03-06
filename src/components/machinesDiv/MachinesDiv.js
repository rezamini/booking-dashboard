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
  <Col><InputGroup.Checkbox /><img src="/wash.ico" className="wash"/></Col>
  <Col><InputGroup.Checkbox /><img src="/wash.ico" className="wash"/></Col>
  <Col><InputGroup.Checkbox /><img src="/wash.ico" className="wash"/></Col>
  <Col><InputGroup.Checkbox /><img src="/wash.ico" className="wash"/></Col>
  </Row>
  <Row>
  <Col><InputGroup.Checkbox /><img src="/wash.ico" className="wash"/></Col>
  <Col><InputGroup.Checkbox className="check"/><img src="/wash.ico" className="wash"/></Col>
  </Row>
  <Row>
    <Col><Button variant="primary">Reserve</Button></Col>

  </Row>
</Container>
  );
}

export default MachinesDiv;
