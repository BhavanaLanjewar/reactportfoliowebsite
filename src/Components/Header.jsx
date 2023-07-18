import React from 'react';
import {Container, Nav, Navbar }  from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

const  Header = () => {
  let activeStyle = {
    color:"#fff",
  };
  return (
    <div className="header">
      <Navbar expand="lg" fixed="top" bg="dark" variant="light">
        <Container>
          <Navbar.Brand> Bhavana Lanjewar Portfolio </Navbar.Brand>
          <NavbarToggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='ml-auto'>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                Projects
              </NavLink>
              <NavLink to="/about" className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link" style={({isActive}) => (isActive ? activeStyle : undefined)}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;