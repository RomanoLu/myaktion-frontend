import React, { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import { useParams } from 'react-router-dom';
import axios from "axios";

function EditCampaign() {
  const { dynamicProp } = useParams();
  const [campaign, setCampaign] = useState({});
  
  const [name, setName] = useState("");
  const [spendenziel, setSpendenziel] = useState("");
  const [spendenbetrag, setSpendenbetrag] = useState("");
  const [iban, setIban] = useState("");
  const [bankname, setBankname] = useState("");  
  const [nameacc, setnameacc] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8443/organizer/campaign/${dynamicProp}`)
      .then(res => {
        console.log("iban "+res.data.account.iban);
        setCampaign(res.data);
        setName(res.data.name);
        setSpendenziel(res.data.targetAmount);
        setSpendenbetrag(res.data.donationMinimum);
        setIban(res.data.account.iban);
        setBankname(res.data.account.nameOfBank);
        setnameacc(res.data.account.name);
      })
      .catch(err => console.log(err));
  }, [dynamicProp]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setCampaign({...campaign, name: event.target.value});
  }

  const handleSpendenzielChange = (event) => {
    setSpendenziel(event.target.value);
    setCampaign({...campaign, targetAmount: event.target.value});
  }

  const handleSpendenbetragChange = (event) => {
    setSpendenbetrag(event.target.value);
    setCampaign({...campaign, donationMinimum: event.target.value});
  }

  const handleAccNameChange = (event) => {
    setCampaign(prevDonation => ({ ...prevDonation, account: { ...prevDonation.account, name: event.target.value } }));
  }

  const handleIbanChange = (event) => {
    setCampaign(prevDonation => ({ ...prevDonation, account: { ...prevDonation.account, iban: event.target.value } }));
  }

  const handleBanknameChange = (event) => {
    setCampaign(prevDonation => ({ ...prevDonation, account: { ...prevDonation.account, nameOfBank: event.target.value } }));
  }




  const handleSubmit = (event) => {
  console.log(campaign);
    event.preventDefault();
    axios.put(`http://localhost:8443/organizer/campaign/${dynamicProp}`, campaign)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <>
    <h1 style={{ textAlign: "left" }} >Aktionen Editieren</h1>
    <div style={{ marginLeft: "10%", marginRight: "10%", width: "60%" }}>

        <Tabs
            defaultActiveKey="profile"
            className="mb-3"
        >
            <Tab eventKey="home" title="Allgemein">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of your campaign " value={name} onChange={handleNameChange} />
                        <Form.Label>Spendenziel</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your donaitiongoal" value={spendenziel} onChange={handleSpendenzielChange} />
                        <Form.Label>Spendenbetrag</Form.Label>
                        <Form.Control type="text" placeholder="Enter the donaitionamount" value={spendenbetrag} onChange={handleSpendenbetragChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit" href="/campaignList">
                            Speichern
                        </Button>
                        <Button variant="secondary" type="" href="/campaignList">
                            Abbrechen
                        </Button>
                    </Form.Group>


                    <Form.Text className="text-muted">
                    Änderen Sie hier ihre Campaign Info
                    </Form.Text>
                </Form>
            </Tab>
            <Tab eventKey="profile" title="Bankverbindung">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your name" value={nameacc} onChange={handleAccNameChange} />
                        <Form.Label>IBAN</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your IBAN" value={iban} onChange={handleIbanChange} />
                        <Form.Label>Name der Bank</Form.Label>
                        <Form.Control type="text" placeholder="Enter the name of Your bank" value={bankname} onChange={handleBanknameChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit" href="/campaignList">
                            Speichern
                        </Button>
                        <Button variant="secondary" type="" href="/campaignList">
                            Abbrechen
                        </Button>
                    </Form.Group>


                    <Form.Text className="text-muted">
                        Änderen Sie hier ihre Account Info
                    </Form.Text>
                </Form>
            </Tab>

        </Tabs>
    </div>
</>
);
}

export default EditCampaign;