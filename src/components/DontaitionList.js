import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

function DonationList() {
    const apiBaseUrl = process.env.MYAKTION_URL || "http://localhost:8443";
    const { dynamicProp } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
        .get(`${apiBaseUrl}/donation/organizer/donation/list/` + dynamicProp)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));    
    
    },); 

    return (
        <>
        <h1 style={{ textAlign: "left" }} >Meine Aktionen</h1>
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            
            <Card style={{ width: '55rem' }}>

                <Card.Header as="h5">Spenderliste für { dynamicProp }</Card.Header>
                {//<Card.Img variant="top" src="https://claypotchurchint.com/wp-content/uploads/2017/10/Donation-plugins-for-WordPress1.jpg" />
                }<Card.Body>
                    {data ? (
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
                           {
                                data.map((val) => (
                                <tr key={val.id}>
                                <td>{val.donorName || "null"}</td>
                                <td>{val.account?.iban || "null"}</td>
                                <td>{val.account?.nameOfBank || "null"}</td>
                                <td>{val.amount || "null"}</td>
                                <td>{val.receiptRequested ? "Ja" : (val.receiptRequested === false ? "Nein" : "null")}</td>
                                <td>{val.status || "null"}</td>
                            </tr>    
                                ) )
                            }
                          
                        </tbody>
                    </Table>
                    ) : (
                        <p>Es existieren noch keine Spenden für diese Aktion...</p>
                    )}


                    
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default DonationList;