import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './naviguation.css';

const Naviguation = () => {
    
    return <div className="naviguation-container">
            <div className="container">
                <Navbar expand="md">
                    <Navbar.Brand href="#home">ANPE<span>searchBot</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls = "naviguation-bar"/>
                    <Navbar.Collapse id="naviguation-bar" >
                        <Nav className="ml-auto">
                            <Nav.Link className="navig-link link-bottom-border" href="https://www.anpe-mali.org/">Visiter ANPE</Nav.Link>
                            <Nav.Link className="navig-link link-bottom-border" href="#">Alertes SMS</Nav.Link>
                            <Nav.Link className="navig-link link-bottom-border" href="#">A propos de nous</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    </div>
}

export default Naviguation;