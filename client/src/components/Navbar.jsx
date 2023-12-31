import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import AuthService from './utils/auth'



export default function CustomNavbar() {

  const [expanded, setExpanded] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };

  const closeNavbar= () => {
    setExpanded(false);
  };

  return (
    <>
    <Navbar data-bs-theme="dark" expand="md" style={{height: '90px'}}className='sticky-top' id="navbar" expanded={expanded}>
      <Container fluid className='p-0 m-0'>
        <Navbar.Brand href="/" id='nav-name' className='py-auto px-3'>
          JustTask
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" onClick={closeNavbar}>
          <Nav id='nav-list' >
            
            
            {AuthService.loggedIn() ? (
            <>
            <Link className="nav-link" to="/dashboard">DASHBOARD</Link>
            <Link className="nav-link" to="/completed">COMPLETED</Link>
            {/* <Link className="nav-link" to="/user">USER</Link> */}
            {/* <Link className="nav-link" to="/group">GROUP</Link> */}
            <Link className="nav-link" to="/task">ADD TASK</Link>
              <button className="nav-link" onClick={logout}>
                LOGOUT
              </button>
            </>
          ): (
            <>
            <Link className="nav-link" to="/login">LOGIN</Link>
            </>
            
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
