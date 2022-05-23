import React from "react";
import {HeaderDiv} from "../style"
import {Navbar,Container, Button} from 'react-bootstrap'
import logo from '../logo.png';
const Header = () => {
  return (
    <HeaderDiv>
    <Navbar expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} className="logo" alt="logo"/>
          <b>Dropbox</b> 
          Business
        </Navbar.Brand>
        <Button variant="default" className="left try30 default">Try Free for 30 Days</Button>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
      </Container>
    </Navbar>
    </HeaderDiv>
  );
};

export default Header;
