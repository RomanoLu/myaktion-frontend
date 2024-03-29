import { Button, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import React from 'react';
import Cookies from 'js-cookie';

const apiBaseUrl = process.env.REACT_APP_MYAKTION_URL;
class CampaignList extends React.Component {
    constructor() {
        super();
        this.state = {
          campaigns: []
        };
      }


    componentDidMount() {
        const jwt = Cookies.get("jwt");
        Axios.get(`${apiBaseUrl}/organizer/campaign/list`, {
            headers: {
              Authorization: `Bearer ${jwt}` // Das JWT-Token als Bearer-Token im Authorization-Header hinzufügen
            }
          })
          .then((response) => {
            const campaigns = response.data;
            this.setState({ campaigns });
            console.log(this.state.campaigns);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        delete_Campaign = (event) =>{
            const jwt = Cookies.get("jwt");
            console.log("Event Value: " + event.target.value);
            Axios.delete(`${apiBaseUrl}/organizer/campaign/` + event.target.value, {
                headers: {
                  Authorization: `Bearer ${jwt}` // Das JWT-Token als Bearer-Token im Authorization-Header hinzufügen
                }
              })
            .then((response) => {
                console.log(response);
                const campaigns = this.state.campaigns.filter((campaign) => {
                    return campaign.id !== event.target.value;
                  });
                  this.setState({ campaigns });
                  
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      render(){

        

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
                            {
                                this.state.campaigns.map((val) =>(
                            <tr key={val.id}>
                                <td><Button variant='danger' value={val.id} onClick={this.delete_Campaign}>x</Button></td>
                                <td>{val.name}</td>
                                <td>{val.targetAmount}</td>
                                <td>{val.amountDonatedSoFar}</td>
                                <td><a href={'/editCampaign/'+ val.id}>Editieren</a></td>
                                <td><a href={'/donationList/'+ val.id} >Spendenliste</a></td>
                                <td><a href={'/editdonationform/'+ val.id}>Formular</a></td>
                            </tr>
                                ))
                            }
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