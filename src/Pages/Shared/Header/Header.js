import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "react-toggle/style.css" 
import { Button, Image, OverlayTrigger, ToggleButton, Tooltip } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { MDBSwitch } from 'mdb-react-ui-kit';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img style={{ height: '40px' }} src="https://thumbs.dreamstime.com/b/earth-globe-icon-vector-icons-white-background-trendy-linear-website-print-logo-emblem-symbol-inter-interface-element-168199322.jpg" alt="" /></Navbar.Brand>
        <Navbar.Brand href="#home">LearnIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/'>Home</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/courses'>Courses</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/blog'>Blog</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/faq'>FAQ</Link>
          </Nav>

          <Nav>
          <>
          {
            user?.uid ?
            <>
            <Link onClick={handleLogOut} style={{ textDecoration: 'none', color: 'white' }} className='me-3'>Logout</Link>
            </>
            :
            <>
             <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/login'>Login</Link>
             <Link style={{ textDecoration: 'none', color: 'white' }} className='me-3' to='/register'>Register</Link>
            
            </>
          }
          </>
          <OverlayTrigger placement="bottom"
           overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}>
          <Link className='me-2 pe-2'>
            {user?.photoURL?
             <Image
                style={{ height: '30px' }}
                roundedCircle
                src={user?.photoURL}>
             </Image>
            : <FaUser color='white'></FaUser>
            }
            </Link>
            </OverlayTrigger>
            <MDBSwitch id='flexSwitchCheckChecked' label='' />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;