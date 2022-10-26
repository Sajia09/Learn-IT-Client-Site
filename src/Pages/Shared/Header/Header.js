import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LearnIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/'>Home</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/courses'>Courses</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/blog'>Blog</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/faq'>FAQ</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/register'>Register</Link>                      
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/login'>Login</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;