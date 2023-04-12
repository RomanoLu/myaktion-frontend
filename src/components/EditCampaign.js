import React, { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";

function EditCampaign() {
  const apiBaseUrl = process.env.REACT_APP_MYAKTION_URL ;
  const { dynamicProp } = useParams();
  const [campaign, setCampaign] = useState({});

  const [name, setName] = useState("");
  const [spendenziel, setSpendenziel] = useState("");
  const [spendenbetrag, setSpendenbetrag] = useState("");
  const [iban, setIban] = useState("");
  const [bankname, setBankname] = useState("");
  const [nameacc, setnameacc] = useState('');

  useEffect(() => {
    const jwt = Cookies.get("jwt");
    axios.get(`${apiBaseUrl}/organizer/campaign/${dynamicProp}`, {
      headers: {
        Authorization: `Bearer ${jwt}` // Das JWT-Token als Bearer-Token im Authorization-Header hinzufügen
      }
    })
      .then(res => {
        setCampaign(res.data);
        setName(res.data.name);
        setSpendenziel(res.data.targetAmount);
        setSpendenbetrag(res.data.donationMinimum);
        setIban(res.data.account.iban);
        setBankname(res.data.account.nameOfBank);
        setnameacc(res.data.account.name);
      })
      .catch(err => console.log(err));
  }, [dynamicProp, apiBaseUrl]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setCampaign({ ...campaign, name: event.target.value });
  }

  const handleSpendenzielChange = (event) => {
    setSpendenziel(event.target.value);
    setCampaign({ ...campaign, targetAmount: event.target.value });
  }

  const handleSpendenbetragChange = (event) => {
    setSpendenbetrag(event.target.value);
    setCampaign({ ...campaign, donationMinimum: event.target.value });
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
    console.log("Submit wurde gedrückt");
    const jwt = Cookies.get("jwt");
    event.preventDefault();
    console.log(campaign);
    event.preventDefault();
    axios.put(`${apiBaseUrl}/organizer/campaign/${dynamicProp}`, campaign, {
      headers: {
        Authorization: `Bearer ${jwt}` // Das JWT-Token als Bearer-Token im Authorization-Header hinzufügen
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <>
      <h1 style={{ textAlign: "left" }} >Aktionen Editieren</h1>
      <div style={{ marginLeft: "10%", marginRight: "10%", width: "60%" }}>

        <Tabs
          defaultActiveKey="home"
          className="mb-3"
        >
          <Tab eventKey="home" title="Allgemein">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name of your campaign " value={name} onChange={handleNameChange} />
                <Form.Label>Spendenziel</Form.Label>
                <Form.Control type="text" placeholder="Enter Your donaitiongoal" value={spendenziel} onChange={handleSpendenzielChange} />
                <Form.Label>Spendenbetrag</Form.Label>
                <Form.Control type="text" placeholder="Enter the donaitionamount" value={spendenbetrag} onChange={handleSpendenbetragChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicButton">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Speichern
                </Button>
                <Button variant="secondary" href="/campaignlist" >
                  Abbrechen
                </Button>
              </Form.Group>


              <Form.Text className="text-muted">
                Änderen Sie hier ihre Campaign Info
              </Form.Text>
            </Form>
          </Tab>
          <Tab eventKey="profile" title="Bankverbindung">
            <Form >
              <Form.Group className="mb-3" controlId="formBasicBank">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your name" defaultValue={nameacc} onChange={handleAccNameChange} />
                <Form.Label>IBAN</Form.Label>
                <Form.Control type="text" placeholder="Enter Your IBAN" defaultValue={iban} onChange={handleIbanChange} />
                <Form.Label>Name der Bank</Form.Label>
                <Form.Control type="text" placeholder="Enter the name of Your bank" defaultValue={bankname} onChange={handleBanknameChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBankButton">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Speichern
                </Button>
                <Button variant="secondary" href="/campaignlist" >
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