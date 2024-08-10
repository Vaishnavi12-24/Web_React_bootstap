
import './Announcement.css'; 
import {Container, Row, Col} from 'react-bootstrap';


const Announcement = () => {
  
return (
    <div className="announce">
    <Container>
        <Row >
          <Col md={6}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col id="Column_list_padding">
                  <h1>UPCOMING EVETS</h1>
                  <h3>Fall Festival</h3>
                  <p>October 14, 2024</p>
                  <p>A community event featuring games, food stalls, and fun activities for families.</p>
                  <h3>Parent-Teacher Conferences</h3>
                  <p>November 3-4, 2024</p>
                  <p>Scheduled meetings between parents and teachers to discuss student progress and any concerns</p>
                
                  <h3>Thanksgiving Food Drivel</h3>
                  <p>November 20-24, 2024</p>
                  <p>A charity event where students and families donate non-perishable food items for local shelters</p>
              
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={6}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col className="Column_list">
                  <h1>LATEST NEWS</h1>
                  <h3>Feast of the Assumption and Curriculum Updates</h3>
                  <p>The upcoming Feast of the Assumption will be observed with a school Mass on August 15th.​</p>
                
                  <h3>Feast of the Assumption and Curriculum Updates</h3>
                 
                  <p>Hosting a Book Fair, with a parade on August 12th where students and staff will dress as book characters​</p>
                  
                  <h3>First Day of School and New Faculty Members</h3>
                 
                  <p>The school also introduced ten new members to its faculty and staff, encouraging families to review the updated​</p>
                  
                  
                
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={6}>
            <Container className="custom-container">
              <Row className="mt-5">
                <Col className="Column_list">
                  <h1>ACHIEVEMENTS</h1>
                  <h3>National Science Olympiad Participation</h3>
                  <p>School showcasing the exceptional talents of our students in various scientific disciplines</p>
                 
                  <h3>Green School Initiative</h3>
                  <p> School Focusing on sustainability and environmental awareness</p>
                
                </Col>
              </Row>
            </Container>
          </Col>
          {/* <Col md={4}>
           <Row className='row_decoration'>
        
          <ScrollData/>
          </Row>
            
          </Col> */}
      
        </Row>
      </Container>
  </div>

  );

};

export default Announcement;

