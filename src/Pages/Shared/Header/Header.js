import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from '../../../hooks/useAuth';
import {Button} from 'react-bootstrap';
const Header = () => {
  const {user,logOut} = useAuth();
  return (
    <>
      <Navbar bg='dark' expand='lg' fixed='top' collapseOnSelect variant='dark'>
        <Container>
          <Navbar.Brand to='home/#home'>Genius</Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/home#home'>
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#services'>
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#experts'>
              Experts
            </Nav.Link>
           {
             user.email && <Nav.Link as={HashLink} to='/user'>
             {user.displayName}
           </Nav.Link>
           }
            {
              user.email? <Button onClick={logOut} vaient="secondary">Logout</Button>
              :
              <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
