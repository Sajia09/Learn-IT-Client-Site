import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../Contexts/ThemeProvider/Theme';
import "react-toggle/style.css" 
import Toggle from 'react-toggle';
import { Button, ToggleButton } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
          <Button variant="light" onClick={handleLogOut}>Log out</Button>
          </Nav>

          <Nav>
          <>
          {
            user?.uid ?
            <>
            <Button variant="light" onClick={handleLogOut}>Log out</Button>
            </>
            :
            <>
             <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/login'>Login</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/register'>Register</Link>
            </>
          }
          </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;