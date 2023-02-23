import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';


function CreateCampaign() {
    
    return (
        <>
            <h1 style={{ textAlign: "left" }} >Manage Aktionen</h1>
            <div style={{ marginLeft: "10%", marginRight: "10%", width: "60%"}}>

                <Tabs
                    defaultActiveKey="profile"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Allgemein">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name of your campaign " />
                                <Form.Label>Spendenziel</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your donaitiongoal" />
                                <Form.Label>Spendenbetrag</Form.Label>
                                <Form.Control type="text" placeholder="Enter the donaitionamount" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicButton">
                                <Button variant="primary" type="submit">
                                    Speichern
                                </Button>
                                <Button variant="secondary" type="submit">
                                    Abbrechen
                                </Button>
                            </Form.Group>


                            <Form.Text className="text-muted">
                                BlaBlaBla
                            </Form.Text>
                        </Form>
                    </Tab>
                    <Tab eventKey="profile" title="Bankverbindung">
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your name" />
                                <Form.Label>IBAN</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your IBAN" />
                                <Form.Label>Name der Bank</Form.Label>
                                <Form.Control type="text" placeholder="Enter the name of Your bank" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicButton">
                                <Button variant="primary" type="submit" href='/campaignlist'>
                                    Speichern
                                </Button>
                                <Button variant="secondary" type="submit" href='/campaignlist'>
                                    Abbrechen
                                </Button>
                            </Form.Group>


                            <Form.Text className="text-muted">
                                BlaBlaBla
                            </Form.Text>
                        </Form>
                    </Tab>
                    
                </Tabs>
            </div>
        </>
    );
}

export default CreateCampaign;