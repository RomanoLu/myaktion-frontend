import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './Login';

function LandingPage() {
  return (
    <div className="landing-page" style={{ backgroundColor: '#f7f7f7' }}>
      <Container>
        <Row>
          <Col md={6} className="text-col">
            <h1 className="heading">Willkommen Myaktion</h1>
            <p className="subheading">
              Wir bieten Ihnen die Möglichkeit Spendenaktionen durchzuführen.
            </p>
            <Login></Login>
          </Col>
          <Col md={6} className="image-col">
            <img src="https://www.betterplace.org/c/spenden-sammeln/assets/als-unternehmen/spendenaktion/icon-spenden-verteilen.jpg" alt="Beispielbild" className="landing-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
