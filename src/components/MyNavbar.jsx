import React from 'react'
import { NavLink } from "react-router-dom";

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function MyNavbar() {

    const {  isLogging, authenticateUser } = useContext(AuthContext)

    const handleLogout = () => {
      localStorage.removeItem("authToken")
      authenticateUser()
    }


  return (
    <div>
      { isLogging === true ? (
         <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand as={NavLink} to="/"> Home </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/about" >About </Nav.Link>
                    <Nav.Link as={NavLink} to="/hotels" > Hoteles </Nav.Link>
                    <Nav.Link as={NavLink} to="/profile" > Perfil </Nav.Link>
                <Nav.Link onClick={handleLogout}> Logout </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
      ): (
        <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand as={NavLink} to="/"> Home </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/about" > About </Nav.Link>
                    <Nav.Link as={NavLink} to="/hotels" > Hoteles </Nav.Link>
                    <Nav.Link as={NavLink} to="/signup" > Signup </Nav.Link>
                    <Nav.Link as={NavLink} to="/login" > Login </Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
          </Navbar>
      )
     }
    </div>
  )
}

export default MyNavbar