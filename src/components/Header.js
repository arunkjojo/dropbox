import React from "react";
import {HeaderDiv, Heading} from "../style"
import {Navbar,Container, Button, Row, Col} from 'react-bootstrap'
import logo from '../logo.png';
const Header = () => {
  return (
    <HeaderDiv>
    <Navbar expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand class="navbar-brand">
          <img src={logo} className="logo" alt="logo"/>
          <b>Dropbox</b> 
          Business
        </Navbar.Brand>
        
        <div class="d-flex d-none d-sm-block">
          <button class="default btn btn-default">
            Try Free for 30 Days</button>

          <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>
      </Container>
    </Navbar>

    <Row>
      <Col>
        <Heading>Work Comes together in Dropbox Business</Heading>
      </Col>
    </Row>

    </HeaderDiv>
  );
};

export default Header;
