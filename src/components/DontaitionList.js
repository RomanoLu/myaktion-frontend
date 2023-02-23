import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function DonationList() {
    
    return (
        <>
        <h1 style={{ textAlign: "left" }} >Meine Aktionen</h1>
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            
            <Card style={{ width: '55rem' }}>

                <Card.Header as="h5">Spenderliste</Card.Header>
                {//<Card.Img variant="top" src="https://claypotchurchint.com/wp-content/uploads/2017/10/Donation-plugins-for-WordPress1.jpg" />
                }<Card.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>IBAN</th>
                                <th>Name der Bank</th>
                                <th>Spendenbetrag</th>
                                <th>Quittung</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Luca</td>
                                <td>DE6400000000000012345</td>
                                <td>Sparkasse Reutlingen</td>
                                <td>1000 €</td>
                                <td>Ja</td>
                                <td>überwiesen</td>
                            </tr>                        
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default DonationList;