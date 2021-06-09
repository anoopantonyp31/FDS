import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import Link from 'next/link'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
           emp_name:""
        }
    } 


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="navbar-nav" href ="/">ADD Fixed Deposit </Link>
                <Link className="navbar-nav" href ="/fixedDeposit">View Fixed Deposit List </Link>
                <Link className="navbar-nav" href ="/textExtract">Text Extract </Link>
              </Nav>
              <Nav>
                
                <Link className="nav-link" href ="/help">
                  Help
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            );

    }




}

 

export default HeaderComponent;