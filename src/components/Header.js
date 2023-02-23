import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "5%" }}>
      <Container>
        <Navbar.Brand href="/">MyAktion-Migration</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/campaignlist">Campaign Liste</Nav.Link>
            <Nav.Link href="/createCampaign/123">Create Campaign</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;