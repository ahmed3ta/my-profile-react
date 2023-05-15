import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Dashboard = () => {
    
    return (
      <>
       <Jumbotron>
        <div className="row">
            <div className="col-md-6">
                Name: 
            </div>
            <div className="col-md-6">
                Ahmed Atta
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                Age:
            </div>
            <div className="col-md-6">
                29
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                Occupation:
            </div>
            <div className="col-md-6">
                DevOps Engineer
            </div>
        </div>
        </Jumbotron>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Azure Team who worked in this lab
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Mohamed Hosny, Shaheer Shokry, Ahmed Atta, Amr Soliman, Peter Hanna,</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Oter Teams who worked on this lab
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>La walahy mafeesh 7d mohtm</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Special Thanks
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Special Thanks to Hosny</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </>
    )
}

export default Dashboard