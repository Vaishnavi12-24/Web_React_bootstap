import React, { useState } from 'react';
import './Announcement.css'; 
import CustomNavbar from './CustomNavbar'; 
import {Container, Row, Col} from 'react-bootstrap';
import ScrollData from './Scroll';

const Announcement = () => {
  
return (
    <div className="announce">
    <Container>
        <Row>
          <Col md={4}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col className="Column_list">
                  <h1>Welcome to React Bootstrap</h1>
                  <p>This is a simple example of a React Bootstrap application.</p>
                  <p>Test</p>
                  <p>Test</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col className="Column_list">
                  <h1>Welcome to React Bootstrap</h1>
                  <p>This is a simple example of a React Bootstrap application.</p>
                  <p>Test</p>
                  <p>Test</p>
                
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4}> 
           <Row className='row_decoration'>
        
          <ScrollData/>
          </Row>
            
          </Col>
        </Row>
      </Container>
  </div>

  );

};

export default Announcement;



{/* <Container>
        <Row>
          <Col md={4}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col className="Column_list">
                  <h1>Welcome to React Bootstrap</h1>
                  <p>This is a simple example of a React Bootstrap application.</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={4}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col className="Column_list">
                  <h1>Welcome to React Bootstrap</h1>
                  <p>This is a simple example of a React Bootstrap application.</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                </Col>
              </Row>
            </Container>
          </Col>
          {/* <Col md={4}> */}
          {/* <Row className='row_decoration'>
        
          <ScrollData/>
          </Row>
            
          </Col> */}
    //     </Row>
    //   </Container> */}