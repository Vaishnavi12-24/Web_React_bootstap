import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './CustomNavbar.css'; // Import custom CSS
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomNavbar = () => {
  const [showAboutSubmenu, setShowAboutSubmenu] = useState(false);
  const [showActivitySubmenu, setshowActivitySubmenu] = useState(false);
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link
              href="#about"
              onMouseEnter={() => setShowAboutSubmenu(true)}
              onMouseLeave={() => setShowAboutSubmenu(false)}
              className="nav-item-with-submenu"
            >
              ABOUT TO SCHOOL
                <FontAwesomeIcon icon={faCaretDown} className="icon" />
              {showAboutSubmenu && (
                <div className="submenu">
                  <Nav.Link href="#test1">Introduction</Nav.Link>
                  <Nav.Link href="#test2">Aim</Nav.Link>
                  <Nav.Link href="#test2">Fee Structure</Nav.Link>
                  <Nav.Link href="#test2">Bus Fee</Nav.Link>
                  <Nav.Link href="#test2">Library</Nav.Link>
                  <Nav.Link href="#test2">Laboratory</Nav.Link>
                </div>
              )}
            </Nav.Link>
            <Nav.Link href="#contact">COURSES</Nav.Link>
            <Nav.Link
              href="#activity"
              onMouseEnter={() => setshowActivitySubmenu(true)}
              onMouseLeave={() => setshowActivitySubmenu(false)}
              className="nav-item-with-submenu"
            >
              ACTIVITY
                <FontAwesomeIcon icon={faCaretDown} className="icon" />
              {showActivitySubmenu && (
                <div className="submenu">
                  <Nav.Link href="#test1">Sports</Nav.Link>
                  <Nav.Link href="#test2">Music</Nav.Link>
                  <Nav.Link href="#test2">House System</Nav.Link>
                  <Nav.Link href="#test2">Examination</Nav.Link>
                  <Nav.Link href="#test2">Other Activities</Nav.Link>
            
                </div>
              )}
              </Nav.Link>
            <Nav.Link href="#contact">FACULTY</Nav.Link>
           < Nav.Link href="#contact">GALLRY</Nav.Link>
            <Nav.Link href="#contact">CALENDAR</Nav.Link>
            <Nav.Link href="#contact">TC DOWNLOAD</Nav.Link>
            <Nav.Link href="#contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
