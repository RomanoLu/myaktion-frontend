import { Button, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import React from 'react';

class CampaignList extends React.Component {
    constructor() {
        super();
        this.state = {
          campaigns: []
        };
      }


    componentDidMount() {
        Axios.get("http://localhost:8443/organizer/campaign/list")
          .then((response) => {
            const campaigns = response.data;
            this.setState({ campaigns });
            console.log(this.state.campaigns);
          })
          .catch(function (error) {
            console.log(error);
          });
      }





      render(){

        const delete_Campaign = () =>{
            //Delete Campaign-Rest Call
        }

    return (
        <>
        <h1 style={{ textAlign: "left" }} >Meine Aktionen</h1>
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            
            <Card style={{ width: '55rem' }}>

                <Card.Header as="h5">My-Aktion Migration</Card.Header>
                {//<Card.Img variant="top" src="https://claypotchurchint.com/wp-content/uploads/2017/10/Donation-plugins-for-WordPress1.jpg" />
                }<Card.Body>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Spendenziel</th>
                                <th>Bisher gespendet</th>
                                <th></th>
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Button variant='danger'>x</Button></td>
                                <td>Erdbeben</td>
                                <td>100€</td>
                                <td>45€</td>
                                <td><a href='/createCampaign'>Editieren</a></td>
                                <td><a href='/donationList'>Spendenliste</a></td>
                                <td><a href='/fromular'>Formular</a></td>
                            </tr>
                            {
                                this.state.campaigns.map((val) =>(
                            <tr>
                                <td><Button variant='danger' onClick={delete_Campaign}>x</Button></td>
                                <td>{val.name}</td>
                                <td>{val.targetAmount}</td>
                                <td>{val.amountDonatedSoFar}</td>
                                <td><a href='/createCampaign/'>Editieren</a></td>
                                <td><a href='/donationList/'>Spendenliste</a></td>
                                <td><a href='google.com'>Formular</a></td>
                            </tr>
                                ))
                            }
                            
                            <tr>
                            <td><Button variant='danger'>x</Button></td>
                                <td>Trikots</td>
                                <td>100€</td>
                                <td>45€</td>
                                <td><a href='/createCampaign'>Editieren</a></td>
                                <td><a href='/donationList'>Spendenliste</a></td>
                                <td><a href='google.com'>Formular</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
}

export default CampaignList;