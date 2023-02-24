import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function DonationForm() {
  const { dynamicProp,  formcolor, textcolor  } = useParams();
  const navigate = useNavigate();
  const [donation, setDonation] = useState({ donorName: "", account: { iban: "", nameOfBank: "" }, amount: "", receiptRequested: false, status: "IN_PROCESS" });
  const [success, setSuccess] = useState(false);

  const handleNameChange = (event) => {
    setDonation(prevDonation => ({ ...prevDonation, donorName: event.target.value }));
  }

  const handleIbanChange = (event) => {
    setDonation(prevDonation => ({ ...prevDonation, account: { ...prevDonation.account, iban: event.target.value } }));
  }

  const handleNameofBankChange = (event) => {
    setDonation(prevDonation => ({ ...prevDonation, account: { ...prevDonation.account, nameOfBank: event.target.value } }));
  }

  const handleAmountChange = (event) => {
    setDonation(prevDonation => ({ ...prevDonation, amount: event.target.value }));
  }

  const handleReceiptChange = (event) => {
    setDonation(prevDonation => ({ ...prevDonation, receiptRequested: event.target.checked }));
  }

  const handleSubmit = (event) => {
    console.log(donation);
    event.preventDefault();
    axios.post(`http://localhost:8443/donation/donation/` + dynamicProp , donation)
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
    <h1 style={{ textAlign: "left" }} >Geld spenden</h1>
    {success && <Alert key={'success'} variant={'success'}>Erfolgreich Geld gespendet!</Alert>}
  </div>
    <div style={{ marginLeft: "10%", marginRight: "10%", width: "60%", color:  "#"+textcolor, backgroundColor: "#"+ formcolor }}>

        
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of your campaign " onChange={handleNameChange} />
                        <Form.Label>IBAN</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your donaitiongoal" onChange={handleIbanChange} />
                        <Form.Label>Name der Bank</Form.Label>
                        <Form.Control type="text" placeholder="Enter the donaitionamount" onChange={handleNameofBankChange} />
                        <Form.Label>Spendenbetrag</Form.Label>
                        <Form.Control type="text" placeholder="Enter the donaitionamount" onChange={handleAmountChange} />

                        <Form.Check type={'checkbox'} checked={donation.receiptRequested} label={`Spendenbeleg`} onChange={handleReceiptChange} />
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
    </div>
</>
);
}

export default DonationForm;