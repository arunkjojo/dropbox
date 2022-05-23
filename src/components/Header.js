import React from "react";
import {HeaderDiv, Heading} from "../style"
import {Navbar,Container, Button} from 'react-bootstrap'
import logo from '../logo.png';
const Header = () => {
  return (
    <HeaderDiv>
    <Navbar expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} className="logo" alt="logo"/>
          <b>Dropbox</b> 
          Business
        </Navbar.Brand>
        <div className="rightItem">
          <Button variant="default" className="default">Try Free for 30 Days</Button>
        </div>
        <Navbar.Toggle className="navToggle" aria-controls={`offcanvasNavbar-expand-false`} />
      </Container>
    </Navbar>
    <Heading>Work Comes together in Dropbox Business</Heading>
    </HeaderDiv>
  );
};

export default Header;
