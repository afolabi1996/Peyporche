import React, { Component } from 'react';
import  './Header.css';
import {Navbar, Nav, Button} from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <div className='Nav_container'>
            <Navbar bg="light" variant={"light"} expand="lg">
                <Navbar.Brand href="#home">
                  <img className="Nav_Logo" alt="Logo" src="images/logo.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="Nav_Container" >
                        <Nav className="me-auto;">
                          <div className="Nav_Links">
                              <Nav.Link href="#home" className="Nav_Links">Rates</Nav.Link>
                              <Nav.Link href="#link" className="Nav_Links">Outsox</Nav.Link>
                              <Nav.Link href="#link" className="Nav_Links">Services</Nav.Link>
                              <Nav.Link href="#link" className="Nav_Links">Features</Nav.Link>
                              <Nav.Link href="#link" className="Nav_Links">About us</Nav.Link>
                          </div>
                        </Nav>
                    </div>

                    <div className='Nav_Lang'>
                      <img className="Nav_Lang" alt="Lang" src="images/language.png"/>
                    </div>

                    <div className='Header_button'>
                      <Button variant="success">Log in</Button>{' '}
                      <Button variant="success">Join</Button>{' '}
                    </div>
                </Navbar.Collapse>
           </Navbar>
      </div>
    )
  }
}
