import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <Card style={{ width: '25rem' }}>
    
        <Card.Header as="h5">My-Aktion Login</Card.Header>
        {//<Card.Img variant="top" src="https://claypotchurchint.com/wp-content/uploads/2017/10/Donation-plugins-for-WordPress1.jpg" />
        }<Card.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicButton">
        <Button variant="primary" type="submit" href='/campaignlist'>
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