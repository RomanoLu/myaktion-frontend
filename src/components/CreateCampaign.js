import React, { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function CreateCampaign() {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({});  
  const [account] = useState({});
  const [success, setSuccess] = useState(false);

  const handleNameChange = (event) => {
    setCampaign({...campaign, name: event.target.value});
  }

  const handleSpendenzielChange = (event) => {
    setCampaign({...campaign, targetAmount: event.target.value});
  }

  const handleSpendenbetragChange = (event) => {
    setCampaign({...campaign, donationMinimum: event.target.value});
  }

  const handleIbanChange = (event) => {
    setCampaign({...account, iban: event.target.value});    
    setCampaign({...campaign, account: account});
  }

  const handleBanknameChange = (event) => {
    setCampaign({...account, nameOfBank: event.target.value});
    setCampaign({...campaign, account: account});

  }

  const handleAccNameChange = (event) =>{
    setCampaign({...account, name: event.target.value});
    setCampaign({...campaign, account: account});
  }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8443/organizer/campaign/`, campaign)
      .then(res =>{
        console.log(res);
        setSuccess(true)
      } )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    let timeoutId;
    if (success) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
        navigate('/campaignlist'); 
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [success, navigate]);

  return (
    <>
    <div>
    <h1 style={{ textAlign: "left" }} >Aktionen Editieren</h1>
    {

    }
    {success && <Alert key={'success'} variant={'success'}>Campaign erfolgreich gespeichert!</Alert>}
  </div>
    <div style={{ marginLeft: "10%", marginRight: "10%", width: "60%" }}>

        <Tabs
            defaultActiveKey="home"
            className="mb-3"
        >
            <Tab eventKey="home" title="Allgemein">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of your campaign " onChange={handleNameChange} />
                        <Form.Label>Spendenziel</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your donaitiongoal" onChange={handleSpendenzielChange} />
                        <Form.Label>Spendenbetrag</Form.Label>
                        <Form.Control type="text" placeholder="Enter the donaitionamount" onChange={handleSpendenbetragChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit">
                            Speichern
                        </Button>
                        <Button variant="secondary" type="" href="/campaignList">
                            Abbrechen
                        </Button>
                    </Form.Group>


                    <Form.Text className="text-muted">
                    Erstellen Sie hier ihre Campaign Info
                    </Form.Text>
                </Form>
            </Tab>
            <Tab eventKey="profile" title="Bankverbindung">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your name"  onChange={handleAccNameChange} />
                        <Form.Label>IBAN</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your IBAN"  onChange={handleIbanChange} />
                        <Form.Label>Name der Bank</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name of Your bank" onChange={handleBanknameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit" >
                            Speichern
                        </Button>
                        <Button variant="secondary" type="" href="/campaignList">
                            Abbrechen
                        </Button>
                    </Form.Group>


                    <Form.Text className="text-muted">
                    Erstellen Sie hier ihre Account Info
                    </Form.Text>
                </Form>
            </Tab>

        </Tabs>
    </div>
</>
);
}

export default CreateCampaign;