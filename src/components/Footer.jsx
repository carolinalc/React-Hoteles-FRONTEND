import React from 'react'
import {NavLink} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <div className='footer'>


        <Navbar fixed="bottom"  bg="light" variant="light" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <span>React Hotel by María Díez & Carolina Lóspanez
        Know more about us:<Nav.Link as={NavLink} to="/about" >About Us</Nav.Link> </span>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </div>
  )
}

export default Footer