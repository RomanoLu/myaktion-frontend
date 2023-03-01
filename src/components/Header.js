import Cookies from 'js-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';


function BasicExample() {
  const [success, setSuccess] = useState(false);

  const logout = (event) => {
    Cookies.remove("jwt");
    console.log("jwt"+ Cookies.get("jwt"));
    window.location.href = "/";
  }

  const campaignList = (event) => {
    if(Cookies.get("jwt")){
      window.location.href = "/campaignlist";
    }else{
      setSuccess(true);
    }

  }
  
  const createCampaign = (event) => {
    if(Cookies.get("jwt")){
      window.location.href = "/createCampaign";
    }else{
      setSuccess(true);
    }
    
  }

  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: "5%" }}>
      <Container>
        <Navbar.Brand href="/">MyAktion-Migration</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={campaignList} >Campaign Liste</Nav.Link>
            <Nav.Link onClick={createCampaign}>Create Campaign</Nav.Link>
          </Nav>
          <Nav>{success && <Alert key={'danger'} variant={'danger'}>Du bist leider nicht eingeloggt!</Alert>}</Nav>
          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;