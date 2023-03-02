import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from 'react';

function Login() {

  const apiBaseUrl = process.env.MYAKTION_URL || "http://localhost:8443";
  const [email, setEmail] = useState();
  const [passwort, setPasswort] = useState();

  const handleChangePasswort = (event) =>{
    setPasswort(event.target.value);
    console.log(event.target.value);
  }

  const handleChangeemail = (event) =>{
    setEmail(event.target.value);
    console.log(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${apiBaseUrl}/login`, {
      email: email,
      password: passwort
    })
      .then(res => {
        Cookies.set("jwt", res.data); // JWT in einem Cookie speichern
        console.log(Cookies.get("jwt"));
        console.log(email);
        window.location.href = "/campaignlist"; // auf die Campaignlist-Seite umleiten
      })
      .catch(err => console.log(err));
  }

  return (
    <Card style={{ width: '25rem' }}>
    
        <Card.Header as="h5">My-Aktion Login</Card.Header>
        {//<Card.Img variant="top" src="https://claypotchurchint.com/wp-content/uploads/2017/10/Donation-plugins-for-WordPress1.jpg" />
        }<Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  onChange={handleChangeemail} placeholder="Enter email"/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChangePasswort}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicButton">
        <Button variant="primary" type="submit" >
        Submit
      </Button>
      </Form.Group>
      

      <Form.Text className="text-muted">
          Migration der Java EE 7 Anwendung Myaktion
        </Form.Text>
    </Form>
    </Card.Body>
    </Card>
  );
}

export default Login;