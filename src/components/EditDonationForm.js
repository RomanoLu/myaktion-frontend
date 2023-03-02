import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function DonationForm() {
    const apiBaseUrl = process.env.MYAKTION_URL || "http://localhost";
    const { dynamicProp } = useParams();
    const [background, setBackground] = useState('f7f7f7');
    const [textColor, setTextColor] = useState('000000');
    const [formUrl, setFormUrl] = useState(`${apiBaseUrl}:3000/donationform/${dynamicProp}/${background}/${textColor}`);

    const handleBackgroundChange = (event) => {
        const value = event.target.value.slice(1);
        setBackground(value);
        setFormUrl(`${apiBaseUrl}:3000/donationform/${dynamicProp}/${value}/${textColor}`);
    };

    const handleTextColorChange = (event) => {
        const value = event.target.value.slice(1);
        setTextColor(value);
        setFormUrl(`${apiBaseUrl}:3000/donationform/${dynamicProp}/${background}/${value}`);
    };

    const handleWholeUrlChange = (event) => {
        setFormUrl(event.target.value);
    };


    return (
        <>
            <div>
                <h1 style={{ textAlign: "left" }} >Spendenformular bearbeiten</h1>
            </div>
            <div style={{ marginLeft: "10%", marginRight: "10%", width: "60%" }}>


                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Hintergrundfarbe</Form.Label>
                        <Form.Control type="color" defaultValue="#f7f7f7" id='background' onChange={handleBackgroundChange} />
                        <Form.Label>Textfarbe</Form.Label>
                        <Form.Control type="color" id='text' onChange={handleTextColorChange}/>
                        <Form.Label>URL des Formulars</Form.Label>
                        <Form.Control as="textarea" value={formUrl} onChange={handleWholeUrlChange}/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicButton">
                        <Button variant="primary" type="submit" href={formUrl}>
                            Speichern
                        </Button>
                        <Button variant="secondary" type="" href="/campaignList">
                            Zurück
                        </Button>
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Individualisieren Sie ihr Spendenformular
                    </Form.Text>
                </Form>
            </div>
        </>
    );
}

export default DonationForm;